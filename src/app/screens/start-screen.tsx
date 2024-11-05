import { View } from "react-native";
import { Layout } from "@app/layouts/layout";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";

export const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout isScrollable={false}>
      <View className=" flex items-center flex-col justify-between h-[50%] mt-36">
        <View className=" flex items-center flex-col">
          <Text weight="bold" className="text-white text-3xl">
            Welcome to
          </Text>
          <Text weight="bold" className="text-3xl text-main mt-2">
            PC Club
          </Text>
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("Registration" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center mt-24 justify-center"
        >
          <Text weight="bold" className=" text-lg">
            Start
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};

export default StartScreen;
