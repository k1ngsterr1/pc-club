import { View } from "react-native";
import { RoundedButton } from "@shared/ui/BackButton/rounded-button";
import { useNavigation } from "@react-navigation/native";
import Text from "@shared/ui/Text/text";

import BackArrowIcon from "@shared/icons/back-arrow-icon";
import BellIcon from "@shared/icons/bell-icon";
import { useNotificationPopupStore } from "@entities/notification/model/use-notification-popup";
import { usePaymentPopupStore } from "@entities/payment/model/use-payment-popup"; // Import the store
import { usePlanStore } from "@entities/plan/model/use-plan-store";

interface IHeaderProps {
  isLogo?: boolean;
  isNotification?: boolean;
  isPlan?: boolean;
}

export const Header = ({ isLogo, isNotification, isPlan }: IHeaderProps) => {
  const { showPopup } = useNotificationPopupStore();
  const navigation = useNavigation();
  const { plan } = usePlanStore();

  return (
    <View className="flex flex-row items-center justify-between mx-4">
      {isLogo ? (
        <Text weight="bold" className="text-white text-2xl">
          Logo
        </Text>
      ) : (
        <RoundedButton
          icon={<BackArrowIcon />}
          onPress={() => navigation.goBack()}
        />
      )}

      {isPlan && (
        <Text
          weight="bold"
          className="text-white text-2xl mr-12 text-center flex-1"
        >
          {plan}
        </Text>
      )}

      {isNotification && (
        <RoundedButton icon={<BellIcon />} onPress={showPopup} />
      )}
    </View>
  );
};
