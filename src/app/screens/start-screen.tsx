import { View } from "react-native";
import { Layout } from "@app/layouts/layout";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from "src/context/LanguageContext";
import { LanguageSwitcher } from "@shared/ui/LanguageSwitcher";

export const StartScreen = () => {
  const navigation = useNavigation();
  const { i18n } = useLanguage();

  return (
    <Layout isScrollable={false}>
      <View className=" flex items-center flex-col justify-between h-[50%] mt-36">
        <View className=" flex items-center flex-col">
          <Text weight="bold" className="text-white text-3xl">
            {i18n.t("welcomeWhite")}
          </Text>
          <Text weight="bold" className="text-3xl text-main mt-2">
            {i18n.t("welcomeYellow")}
          </Text>
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("Registration" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center mt-56 justify-center"
        >
          <Text weight="bold" className=" text-lg">
            {i18n.t("startButton")}
          </Text>
        </MyTouchableOpacity>
        <View className="w-[60%] mt-40">
          <LanguageSwitcher />
        </View>
      </View>
    </Layout>
  );
};

export default StartScreen;
