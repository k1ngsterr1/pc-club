import { Layout } from "@app/layouts/layout";
import { View } from "react-native";
import Text from "@shared/ui/Text/text";
import { useChooseHoursStore } from "@entities/hours/model/use-choose-hours";

export const HoursScreen = () => {
  const { hours, setHours } = useChooseHoursStore();

  return (
    <Layout isHeader>
      <View className="flex flex-col mt-8 items-center">
        <View className="items-start justify-start flex w-full">
          <Text weight="bold" className="text-light text-2xl ">
            Сколько часов вы хотите?
          </Text>
        </View>
      </View>
    </Layout>
  );
};
