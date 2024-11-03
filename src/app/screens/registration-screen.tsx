import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import Input from "@shared/ui/Input/input";

export const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <View className=" flex items-center flex-col justify-between mt-36">
        <View className=" flex items-center flex-col mb-4">
          <Text weight="bold" className="text-light text-3xl">
            Create Account
          </Text>
        </View>
        <View className="w-full items-center mt-20 mb-44">
          <Input labelText="Phone Number" />
        </View>

        <MyTouchableOpacity
          onPress={() => navigation.navigate("Login" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center"
        >
          <Text weight="bold" className="text-dark text-lg">
            Sign Up
          </Text>
        </MyTouchableOpacity>
        <View className="flex items-center flex-row mt-4">
          <Text className="text-light text-sm">Already a user?</Text>
          <MyTouchableOpacity>
            <Text weight="bold" className="text-main ml-1 text-sm">
              Login
            </Text>
          </MyTouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
