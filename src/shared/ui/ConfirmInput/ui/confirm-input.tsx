import { TextInput } from "react-native";
import { useState } from "react";

interface IInputprops {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const ConfirmInput = ({
  index,
  activeIndex,
  setActiveIndex,
}: IInputprops) => {
  return (
    <TextInput
      onFocus={() => setActiveIndex(index)}
      className={`${
        activeIndex === index ? "border-main" : ""
      } rounded-md w-16 h-16 border-[#FFFFFF0D] border text-center text-4xl text-main`}
      maxLength={1}
    />
  );
};
