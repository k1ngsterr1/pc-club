import React from "react";
import { Layout } from "@app/layouts/layout";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { useChooseHoursStore } from "@entities/hours/model/use-choose-hours";
import WheelPicker from "@quidone/react-native-wheel-picker";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

interface IPickerItem {
  value: number;
  label: string;
}

export const HoursScreen = () => {
  const { hours, setHours } = useChooseHoursStore();
  const navigation = useNavigation();

  const data = [...Array(24).keys()].map((index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  const handleValueChanged = ({ item }: { item: IPickerItem }) => {
    setHours(item.value);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (

    <Layout isHeader isScrollable={false} isNotification>
      <View className="flex flex-col mt-8 items-center">
        <View className="items-start justify-start flex w-full">
          <Text weight="bold" className="text-light text-2xl ">
            Сколько часов вы хотите?
          </Text>
        </View>
        <View className="-mt-14">
          <WheelPicker
            data={data}
            value={hours}
            onValueChanged={handleValueChanged}
            itemHeight={135}
            itemTextStyle={{
              fontSize: 100,
              borderRadius: 20,
              color: "white",
              fontWeight: "bold",
            }}
            width={160}
          />
        </View>
        <MyTouchableOpacity
          onPress={() => navigation.navigate("HoursScreen" as never)}
          className="bg-main rounded-[32px] w-64 h-12 flex items-center justify-center mb-4"
        >
          <Text weight="bold" className="text-dark text-lg">
            Далее
          </Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
