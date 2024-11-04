import { View } from "react-native";

interface ISeparatorProps {
  margin?: string;
}

export const Separator = ({ margin }: ISeparatorProps) => {
  return <View className={`w-full h-[1px] bg-[#FFFFFF1A] ${margin}`} />;
};
