import { View } from "react-native";
import { Layout } from "@app/layouts/layout";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";

export const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <View className=" flex items-center flex-col justify-between h-full mt-36">
        <View className=" flex items-center flex-col">
          <Text weight="bold" className="text-light text-3xl">
            Welcome to
          </Text>
          <Text weight="bold" className="text-main text-3xl mt-2">
            PC Club
          </Text>
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("Registration" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center"
        >
          <Text weight="bold" className="text-dark text-lg">
            Start
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};

export default StartScreen;
