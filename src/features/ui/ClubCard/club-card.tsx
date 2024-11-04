import { View } from "react-native";
import { BlurView } from "expo-blur";
import Text from "@shared/ui/Text/text";
import { Separator } from "@shared/ui/Separator/separator";
import BookingIcon from "@shared/icons/booking-icon";

interface IClubCardProps {
  clubName: string;
  clubLocation: string;
  distance: number;
}

const categories = [
  { category: "STANDART", available: 4, quantity: 34 },
  { category: "PREMIUM", available: "4", quantity: 15 },
  { category: "VIP", available: "4", quantity: 15 },
];

export const ClubCard = ({
  clubName,
  clubLocation,
  distance,
}: IClubCardProps) => {
  return (
    <View
      style={{
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <BlurView intensity={16} tint="light">
        <View className="px-4 py-4 flex flex-col">
          <Text weight="bold" className="text-light text-xl">
            {clubName}
          </Text>
          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="text-[#FFFFFF80]">{clubLocation}</Text>
            <Text className="text-[#FFFFFF80]">~{distance} км</Text>
          </View>
          <Separator margin="mt-3" />
          <View className="flex flex-row items-center justify-between mt-4">
            {categories.map((category, index) => {
              return (
                <View key={index} className="flex items-center flex-col">
                  <Text weight="bold" className="text-light">
                    {category.category}
                  </Text>
                  <View className="flex flex-row items-center mt-1">
                    <Text className=" text-main">{category.available}</Text>
                    <Text className="text-[#FFFFFF80]">/</Text>
                    <Text className=" text-[#FFFFFF80]">
                      {category.quantity}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="flex flex-row items-center mt-5 justify-between">
            <View className="w-[60%] flex items-center gap-y-2 flex-col">
              <View className="w-full items-center justify-center bg-main rounded-[32px] h-7 ">
                <Text className="text-dark text-base">24/7</Text>
              </View>
              <Text className="text-main">Время работы</Text>
            </View>
            <View className="w-[35%] flex items-center gap-y-2 flex-col">
              <View className="w-full items-center justify-center bg-main rounded-[32px] h-7">
                <BookingIcon />
              </View>
              <Text className="text-main">Бронировать</Text>
            </View>
          </View>
        </View>
      </BlurView>
    </View>
  );
};
