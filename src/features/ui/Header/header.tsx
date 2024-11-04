import { View } from "react-native";
import { RoundedButton } from "@shared/ui/BackButton/rounded-button";
import { useNavigation } from "@react-navigation/native";
import Text from "@shared/ui/Text/text";

import BackArrowIcon from "@shared/icons/back-arrow-icon";
import BellIcon from "@shared/icons/bell-icon";
import { useNotificationPopupStore } from "@entities/notification/model/use-notification-popup";

interface IHeaderProps {
  isLogo?: boolean;
}

export const Header = ({ isLogo }: IHeaderProps) => {
  const { showPopup } = useNotificationPopupStore();
  const navigation = useNavigation();

  return (
    <View className=" flex flex-row items-center justify-between mx-4">
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
      <RoundedButton icon={<BellIcon />} onPress={showPopup} />
    </View>
  );
};
