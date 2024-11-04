import { Layout } from "@app/layouts/layout";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { MiniBarcCard } from "@features/ui/MiniBarCard/mini-bar-card";

const miniBarContent = [
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
  {
    item: "Вода ASU, 0.5л.",
    price: "500₸",
  },
];

export const MiniBar = () => {
  return (
    <Layout isHeader>
      <View className="flex flex-col mt-8">
        <Text weight="bold" className="text-light text-2xl">
          Мини-Бар
        </Text>
        <View className="flex flex-row flex-wrap mt-4">
          {miniBarContent.map((item, index) => (
            <View className="mb-4 mr-2">
              <MiniBarcCard key={index} item={item.item} price={item.price} />
            </View>
          ))}
        </View>
      </View>
    </Layout>
  );
};
