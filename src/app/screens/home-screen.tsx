import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";

export const HomeScreen = () => {
  return (
    <Layout isTab>
      <View>
        <Text>Home</Text>
      </View>
    </Layout>
  );
};
