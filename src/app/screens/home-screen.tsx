import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useNavigation } from "@react-navigation/native";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import LinkButton from "@shared/ui/LinkButton/link-button";
import { BarSwiper } from "@features/ui/BarSwiper/bar-swiper";
import ReusableSwiper from "@features/ui/Swiper/swiper";
import { ClubCard } from "@features/ui/ClubCard/club-card";
import { NotificationPopup } from "@shared/ui/NotificationPopup/notification-popup";

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

export const HomeScreen = () => {
  return (
    <Layout isTab isHeader isLogo>
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            Наши Клубы
          </Text>
          <LinkButton text="Смотреть все" screen="OurClubs" />
        </View>
      </View>
      <ReusableSwiper
        data={clubsContent}
        loop={false}
        autoplay={false}
        renderItem={(item) => (
          <ClubCard
            clubName={item.clubName}
            clubLocation={item.clubLocation}
            distance={item.distance}
          />
        )}
        height={273}
        gap={8}
      />
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            Мини-Бар
          </Text>
          <LinkButton text="Смотреть все" screen="MiniBar" />
        </View>
      </View>
      <BarSwiper />
      <View className="mt-8">
        <View className="flex flex-row items-center justify-between">
          <Text weight="bold" className="text-light text-2xl">
            Наши Акции
          </Text>
          <LinkButton text="Смотреть все" screen="OurClubs" />
        </View>
      </View>
      <ReusableSwiper
        data={clubsContent}
        loop={false}
        autoplay={false}
        renderItem={(item) => (
          <ClubCard
            clubName={item.clubName}
            clubLocation={item.clubLocation}
            distance={item.distance}
          />
        )}
        height={273}
        gap={8}
      />
    </Layout>
  );
};
