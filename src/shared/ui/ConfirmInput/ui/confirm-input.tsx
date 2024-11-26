import { TextInput } from "react-native";

interface IInputprops {
  index: number;
  active?: number | string;
  handleActive: (index: number) => void;
  inputRef: React.RefObject<TextInput>;
  onNext: () => void;
  handleNextInput: (index: number) => void;
}

export const ConfirmInput = ({
  index,
  active,
  handleActive,
  inputRef,
  onNext,
  handleNextInput,
}: IInputprops) => {
  return (
    <TextInput
      ref={inputRef}
      className={`${
        active === index ? "border-main " : "border-[#FFFFFF2D]"
      } rounded-md w-16 h-16 border text-center text-4xl text-main`}
      maxLength={1}
      keyboardType="numeric"
      onFocus={() => handleActive(index)}
      onChangeText={(text) => {
        if (text.length === 1) {
          onNext();
        }
      }}
    />
  );
};
