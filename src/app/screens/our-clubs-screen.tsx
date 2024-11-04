import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";

export const LocationScreen = () => {
  return (
    <Layout isTab isHeader>
      <View className="flex flex-col mt-8">
        <Text weight="bold" className="text-light text-2xl">
          Наши клубы
        </Text>
      </View>
    </Layout>
  );
};
