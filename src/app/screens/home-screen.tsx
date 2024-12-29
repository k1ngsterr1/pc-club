import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import LinkButton from "@shared/ui/LinkButton/link-button";
import { BarSwiper } from "@features/ui/BarSwiper/bar-swiper";
import { ClubCard } from "@features/ui/ClubCard/club-card";
import { clubsContent } from "@shared/content/clubDistance";

import { useLanguage } from "src/context/LanguageContext";
import { useClosestClub } from "src/shared/model/useClosestClub";
import { useFavorites } from "@shared/model/useFavorite";


export const HomeScreen = () => {
  const { i18n } = useLanguage();
  const { closestClub } = useClosestClub(clubsContent);
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <Layout isTab isHeader isLogo isNotification>
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            {i18n.t("nearestClub")}
          </Text>
          <LinkButton text={i18n.t("viewAll")} screen="OurClubs" />
        </View>
      </View>

      {closestClub && (
        <View className="mt-4">
          <ClubCard
            clubName={closestClub.clubName}
            clubLocation={closestClub.clubLocation}
            distance={closestClub.distance.toFixed(2)}
            isFavorite={isFavorite(closestClub)}
            onToggleFavorite={() => toggleFavorite(closestClub)}
            clubId={closestClub.id}
          />
        </View>
      )}

      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            {i18n.t("miniBar")}
          </Text>
          <LinkButton text={i18n.t("viewAll")} screen="MiniBar" />
        </View>
      </View>
      <BarSwiper />
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            {i18n.t("promotions")}
          </Text>
          <LinkButton text={i18n.t("viewAll")} screen="OurClubs" />
        </View>
      </View>
    </Layout>
  );
};
