import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { ClubCard } from "@features/ui/ClubCard/club-card";
import LinkButton from "@shared/ui/LinkButton/link-button";
import { useLanguage } from 'src/context/LanguageContext';

const clubsContent = [
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
];

export const LocationScreen = () => {
  const { i18n } = useLanguage()
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
          {clubsContent.map((club, index) => {
            return (
              <View className="mb-4 flex flex-col" key={index}>
                <ClubCard
                  clubName={club.clubName}
                  clubLocation={club.clubLocation}
                  distance={club.distance}
                />
              </View>
            );
          })}
        </View>
      </View>
    </Layout>
  );
};
