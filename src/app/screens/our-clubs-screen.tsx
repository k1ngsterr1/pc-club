import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { ClubCard } from "@features/ui/ClubCard/club-card";
import LinkButton from "@shared/ui/LinkButton/link-button";
import { useLanguage } from 'src/context/LanguageContext';
import useClosestClub from "src/utils/calculateDistance";

const clubsContent = [
  { clubName: "Game On Premium", clubLocation: "Микрорайон Керемет, 7 к43", latitude: 43.23527, longitude: 76.93889 },
  { clubName: "Oinup by GameOn", clubLocation: "Жамбыла 98", latitude: 43.24690, longitude: 76.93133 },
  { clubName: "Oinup by GameOn", clubLocation: "бул. Бухар-Жирау 27/5", latitude: 43.23401, longitude: 76.92374 },
  { clubName: "GameOn Essentai", clubLocation: "проспект Aль-Фараби 120/55", latitude: 43.215523, longitude: 76.929574 },
];

export const LocationScreen = () => {
  const { i18n } = useLanguage();
  const { closestClub, distance } = useClosestClub();

  const getDistanceToClub = (clubLatitude, clubLongitude) => {
    if (!distance) return 0;
    return calculateDistance(closestClub.latitude, closestClub.longitude, clubLatitude, clubLongitude);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const sortedClubs = clubsContent
    .map(club => ({
      ...club,
      distance: getDistanceToClub(club.latitude, club.longitude),
    }))
    .sort((a, b) => a.distance - b.distance);

  return (
    <Layout isTab isHeader isNotification>
      <View className="flex flex-col mt-8">
        <View className="w-full flex flex-row justify-between items-center">
          <Text weight="bold" className="text-light text-2xl">
            {i18n.t('ourClubs')}
          </Text>
          <LinkButton text={i18n.t('viewMap')} screen="MapScreen" />
        </View>
        <View className="mt-4">
          {sortedClubs.map((club, index) => {
            return (
              <View className="mb-4 flex flex-col" key={index}>
                <ClubCard
                  clubName={club.clubName}
                  clubLocation={club.clubLocation}
                  distance={club.distance.toFixed(2)}
                />
              </View>
            );
          })}
        </View>
      </View>
    </Layout>
  );
};
