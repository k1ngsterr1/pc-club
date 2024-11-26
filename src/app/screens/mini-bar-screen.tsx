import { Layout } from "@app/layouts/layout";
import { View, Dimensions } from "react-native";
import Text from "@shared/ui/Text/text";
import { MiniBarcCard } from "@features/ui/MiniBarCard/mini-bar-card";
import { useLanguage } from "src/context/LanguageContext";

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

export const MiniBar = () => {
  const { i18n } = useLanguage();
  return (
    <Layout isHeader isTab isNotification>
      <View className="flex flex-col mt-8 mb-4">
        <Text weight="bold" className="text-light text-2xl">
          {i18n.t("miniBar")}
        </Text>
        <View
          className="gap-x-4 gap-y-3"
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          {miniBarContent.map((item, index) => (
            <View key={index} style={{}}>
              <MiniBarcCard item={item.item} price={item.price} />
            </View>
          ))}
        </View>
      </View>
    </Layout>
  );
};
