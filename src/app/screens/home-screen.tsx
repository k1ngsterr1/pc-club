import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useNavigation } from "@react-navigation/native";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import LinkButton from "@shared/ui/LinkButton/link-button";
import ClubsSwiper from "@features/ui/ClubSwiper/club-swiper";
import { BarSwiper } from "@features/ui/BarSwiper/bar-swiper";

export const HomeScreen = () => {
  return (
    <Layout isTab isHeader isLogo>
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            Наши клубы
          </Text>
          <LinkButton text="Смотреть все" screen="OurClubs" />
        </View>
      </View>
      <ClubsSwiper />
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            Мини-Бар
          </Text>
          <LinkButton text="Смотреть все" screen="OurClubs" />
        </View>
      </View>
      <BarSwiper />
    </Layout>
  );
};
