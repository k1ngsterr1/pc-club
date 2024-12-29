import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { ClubCard } from "@features/ui/ClubCard/club-card";
import LinkButton from "@shared/ui/LinkButton/link-button";
import { clubsContent } from "@shared/content/clubDistance";

import { useLanguage } from 'src/context/LanguageContext';
import { useClosestClub } from 'src/shared/model/useClosestClub';
import { useFavorites } from "@shared/model/useFavorite";


export const LocationScreen = () => {
  const { i18n } = useLanguage();
  const { sortedClubs } = useClosestClub(clubsContent);
  const { isFavorite, toggleFavorite } = useFavorites();

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
          {sortedClubs.map((club, index) => (
            <View className="mb-4 flex flex-col" key={index}>
              <ClubCard
                clubName={club.clubName}
                clubLocation={club.clubLocation}
                distance={club.distance.toFixed(2)}
                isFavorite={isFavorite(club)}
                onToggleFavorite={() => toggleFavorite(club)}
                clubId={club.id}
              />
            </View>
          ))}
        </View>
      </View>
    </Layout>
  );
};
