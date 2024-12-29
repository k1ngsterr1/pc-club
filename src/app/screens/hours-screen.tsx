import React from "react";
import { Layout } from "@app/layouts/layout";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { useChooseHoursStore } from "@entities/hours/model/use-choose-hours";
import WheelPicker from "@quidone/react-native-wheel-picker";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import { useLanguage } from "src/context/LanguageContext";

export const HoursScreen = () => {
  const { hours, setHours } = useChooseHoursStore();
  const navigation = useNavigation();
  const { i18n } = useLanguage();

  const data = [...Array(24).keys()].map((index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  const handleValueChanged = ({
    item,
  }: {
    item: { value: number; label: string };
  }) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setHours(item.value);
  };

  return (
    <Layout isHeader isScrollable={false} isNotification>
      <View className="justify-center items-center">
        <View className="flex flex-col w-full items-start mt-8">
          <Text weight="bold" className="text-light text-2xl mb-4">
            {i18n.t("hours")}
          </Text>
        </View>
        <View className="justify-center items-center overflow-hidden">
          <WheelPicker
            data={data}
            value={hours}
            onValueChanged={handleValueChanged}
            itemHeight={120}
            itemTextStyle={{
              fontSize: 90,
              borderRadius: 20,
              color: "white",
              fontWeight: "bold",
            }}
            width={160}
          />
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("PaymentScreen" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center mt-6"
        >
          <Text weight="bold" className="text-dark text-lg">
            {i18n.t("next")}
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
