import { useState } from "react";
import { Layout } from "@app/layouts/layout";
import { Alert, View } from "react-native";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import { BookBlock } from "@features/ui/BookBlock/book-block";
import { useLanguage } from 'src/context/LanguageContext';
import { checkAgeAndTime, isValidIIN } from "src/utils/ageChecker";

export const BookScreen = () => {
  const navigation = useNavigation();
  const { i18n } = useLanguage();
  const [isVerified, setIsVerified] = useState(false);

  const handleBooking = () => {

    if (isVerified) {
      navigation.navigate("HoursScreen" as never);
      return;
    }

    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour < 22) {
      setIsVerified(true);
      return;
    }

    Alert.prompt(
      "Внимание",
      "По правилам клуба лицам младше 18 лет запрещено бронировать после 22:00. Пожалуйста, введите ваш ИИН для проверки:",
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Подтвердить",
          onPress: async (inputIIN) => {
            if (!isValidIIN(inputIIN)) {
              Alert.alert("Ошибка", "Введите корректный 12-значный ИИН.");
              return;
            }

            const isAllowed = await checkAgeAndTime(inputIIN);
            if (isAllowed) {
              Alert.alert("Успешно", "Вы можете продолжить бронирование!", [
                {
                  text: "Ок",
                  onPress: () => {
                    setIsVerified(true);
                    navigation.navigate("HoursScreen" as never);
                  },
                },
              ]);
            } else {
              Alert.alert("Ограничение", "Вам нельзя бронировать место согласно правилам клуба.");
            }
          },
        },
      ],
      "plain-text"
    );
  };

  return (
    <Layout isHeader isNotification>
      <View className="flex flex-col mt-8 items-center">
        <View className="items-start justify-start flex w-full">
          <Text weight="bold" className="text-light text-2xl ">
            Улица Жандосова, 58/1
          </Text>
        </View>
        <View className="w-full mt-8 mb-8">
          <BookBlock />
        </View>
        <MyTouchableOpacity
          onPress={handleBooking}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center mb-4"
        >
          <Text weight="bold" className="text-dark text-lg">
            {i18n.t('next')}
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
