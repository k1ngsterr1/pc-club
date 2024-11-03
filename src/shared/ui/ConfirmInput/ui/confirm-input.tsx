import { TextInput } from "react-native";

interface IInputprops {
  index: number;
  active?: number;
  handleActive: (index: number) => void;
  inputRef: React.RefObject<TextInput>;
  onNext: () => void;
}

export const ConfirmInput = ({
  index,
  active,
  handleActive,
  inputRef,
  onNext,
}: IInputprops) => {
  return (
    <TextInput
      ref={inputRef}
      className={`${
        active === index ? "border-main " : "border-[#FFFFFF0D]"
      } rounded-md w-16 h-16 border text-center text-4xl text-main`}
      maxLength={1}
      onFocus={() => handleActive(index)}
      onChangeText={(text) => {
        if (text.length === 1) {
          onNext();
        }
      }}
    />
  );
};
