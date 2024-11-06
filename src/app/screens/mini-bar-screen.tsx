import { Layout } from "@app/layouts/layout";
import { View, Dimensions } from "react-native";
import Text from "@shared/ui/Text/text";
import { MiniBarcCard } from "@features/ui/MiniBarCard/mini-bar-card";

const miniBarContent = [
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Вода ASU, 0.5л.", price: "500₸" },
];

const screenWidth = Dimensions.get("window").width;
const itemWidth = (screenWidth - 48) / 2;

export const MiniBar = () => {
  return (
    <Layout isHeader isTab isNotification>
      <View className="flex flex-col mt-8">
        <Text weight="bold" className="text-light text-2xl">
          Мини-Бар
        </Text>
        <View className="flex flex-row flex-wrap  gap-2 mt-4">
          {miniBarContent.map((item, index) => (
            <View
              key={index}
              style={{
                width: itemWidth,
                marginVertical: 8,
              }}
            >
              <MiniBarcCard item={item.item} price={item.price} />
            </View>
          ))}
        </View>
      </View>
    </Layout>
  );
};
