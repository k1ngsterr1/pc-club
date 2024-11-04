import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { ClubCard } from "@features/ui/ClubCard/club-card";

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
  return (
    <Layout isTab isHeader>
      <View className="flex flex-col mt-8">
        <Text weight="bold" className="text-light text-2xl">
          Наши клубы
        </Text>
        <View className="mt-4">
          {clubsContent.map((club, index) => {
            return (
              <View className="mb-4 flex flex-col">
                <ClubCard
                  key={index}
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
