import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import { useNavigation } from "@react-navigation/native";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout isTab>
      <View>
        <Text>Home</Text>

        <MyTouchableOpacity
          onPress={() => navigation.navigate("MiniBar" as never)}
          className="mt-4"
        >
          <Text className="text-main">Mini Bar</Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
