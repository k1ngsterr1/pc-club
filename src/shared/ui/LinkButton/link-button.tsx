import { useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";
import Text from "../Text/text";

interface ILinkButton {
  text: string;
  screen: string;
}

const LinkButton: React.FC<ILinkButton> = ({ text, screen }) => {
  const navigation = useNavigation();

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <MyTouchableOpacity onPress={() => handleNavigation(screen)}>
      <Text className="text-main text-base">{text}</Text>
    </MyTouchableOpacity>
  );
};

export default LinkButton;
