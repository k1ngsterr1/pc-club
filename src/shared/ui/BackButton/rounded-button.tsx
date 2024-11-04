import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";
import { BlurView } from "expo-blur";
import { ReactNode } from "react";

interface IRoundedButtonProps {
  icon: ReactNode;
  onPress?: () => void;
}

export const RoundedButton = ({ icon, onPress }: IRoundedButtonProps) => {
  return (
    <BlurView intensity={16} className="rounded-full overflow-hidden">
      <MyTouchableOpacity
        style={{ backgroundColor: "rgba(217,217,217,0.3)" }}
        className="w-11 h-11 rounded-full items-center justify-center"
        onPress={onPress}
      >
        {icon}
      </MyTouchableOpacity>
    </BlurView>
  );
};
