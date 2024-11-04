import { View } from "react-native";
import { BlurView } from "expo-blur";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";

import CartIcon from "@shared/icons/cart-icon";

interface IMiniBarCardProps {
  item: string;
  price: string;
}

export const MiniBarcCard = ({ item, price }: IMiniBarCardProps) => {
  return (
    <View
      className="w-[170px]"
      style={{
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <BlurView intensity={16} tint="light">
        <View className="px-4 py-4 flex flex-col justify-between h-[150px] ">
          <Text weight="medium" className=" text-lg text-light w-[70%]">
            {item}
          </Text>
          <View className=" flex flex-row justify-between">
            <Text weight="medium" className=" text-lg text-main">
              {price}
            </Text>
            <MyTouchableOpacity className="bg-main w-[40%] items-center justify-center rounded-[16px]">
              <CartIcon />
            </MyTouchableOpacity>
          </View>
        </View>
      </BlurView>
    </View>
  );
};
