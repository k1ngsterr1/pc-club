import { Layout } from "@app/layouts/layout";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import { BookBlock } from "@features/ui/BookBlock/book-block";
import { useLanguage } from 'src/context/LanguageContext';


export const BookScreen = () => {
  const navigation = useNavigation();
  const { i18n } = useLanguage();

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
          onPress={() => navigation.navigate("HoursScreen" as never)}
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
