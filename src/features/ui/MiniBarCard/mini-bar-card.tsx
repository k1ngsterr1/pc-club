import { View } from "react-native";
import { BlurView } from "expo-blur";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";

import CartIcon from "@shared/icons/cart-icon";
import { usePaymentPopupStore } from "@entities/payment/model/use-payment-popup";
import { useNotificationPopupStore } from "@entities/notification/model/use-notification-popup";

interface IMiniBarCardProps {
  item: string;
  price: string;
}

export const MiniBarcCard = ({ item, price }: IMiniBarCardProps) => {
  const { showPaymentPopup, hidePaymentPopup } = usePaymentPopupStore();

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
          <Text weight="medium" className=" text-lg text-light">
            {item}
          </Text>
          <View className=" flex flex-row justify-between">
            <Text weight="medium" className=" text-lg text-main">
              {price}
            </Text>
            <MyTouchableOpacity
              onPress={() => showPaymentPopup()}
              className="bg-main w-[40%] items-center justify-center rounded-[16px]"
            >
              <CartIcon />
            </MyTouchableOpacity>
          </View>
        </View>
      </BlurView>
    </View>
  );
};
