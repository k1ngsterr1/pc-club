import React from "react";
import { ReactNode } from "react";
import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";

interface TabButtonProps {
  isActive: boolean;
  onPress: () => void;
  icon: ReactNode;
}

export const TabButton = ({ isActive, onPress, icon }: TabButtonProps) => {
  return (
    <MyTouchableOpacity onPress={onPress}>
      {React.cloneElement(icon as React.ReactElement<any>, { isActive })}
    </MyTouchableOpacity>
  );
};
