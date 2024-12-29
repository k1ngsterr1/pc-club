import { useState } from "react";
import { View, Alert } from "react-native";
import Text from "@shared/ui/Text/text";
import { Layout } from "@app/layouts/layout";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import Input from "@shared/ui/Input/input";
import { useLanguage } from "src/context/LanguageContext";

export const RegistrationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const { i18n } = useLanguage();

  // const handleSendCode = async () => {
  //   if (!phoneNumber) {
  //     Alert.alert("Ошибка", "Введите номер телефона.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/sendCode", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ phoneNumber }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       Alert.alert("Код отправлен", "Пожалуйста, проверьте ваш WhatsApp.");
  //       navigation.navigate("PhoneConfirmation");
  //     } else {
  //       Alert.alert("Ошибка", "Не удалось отправить код.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert("Ошибка", "Что-то пошло не так.");
  //   }
  // };

  return (
    <Layout isScrollable={false}>
      <View className=" flex items-center flex-col mt-36 justify-between h-[50%]">
        <View className=" flex items-center flex-col mb-4 w-full">
          <Text weight="bold" className="text-light text-3xl">
            {i18n.t("signIn")}
          </Text>
          <View className="w-full items-center mt-20 mb-36">
            {/* <Input
              labelText={i18n.t("phoneNumber")}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            /> */}
            <Input labelText={i18n.t("phoneNumber")} />
          </View>
        </View>

        <MyTouchableOpacity
          onPress={() => navigation.navigate("PhoneConfirmation" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center"
        >
          <Text weight="bold" className="text-dark text-lg">
            {i18n.t("signIn")}
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
