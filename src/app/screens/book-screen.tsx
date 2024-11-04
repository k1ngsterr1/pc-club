import { Layout } from "@app/layouts/layout";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";

export const BookScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout isTab isHeader>
      <View className="flex flex-col mt-8 items-center">
        <View className="items-start justify-start flex w-full">
          <Text weight="bold" className="text-light text-2xl ">
            Улица Жандосова, 58/1
          </Text>
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("HoursScreen" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center"
        >
          <Text weight="bold" className="text-dark text-lg">
            Далее
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
