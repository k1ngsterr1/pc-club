import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";

export const SettingsScreen = () => {
  return (
    <Layout isTab>
      <View>
        <Text>Settings</Text>
      </View>
    </Layout>
  );
};
