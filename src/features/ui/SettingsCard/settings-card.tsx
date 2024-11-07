import { BlurView } from "expo-blur";
import { View } from "react-native";
import { ReactNode } from "react";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { useNavigation } from "@react-navigation/native";


interface ISettingsCardProps {
  onPress?: () => void;
  icon: ReactNode;
  text?: string;
  title: string;
}

export const SettingsCard = ({
  onPress,
  icon,
  text,
  title,
}: ISettingsCardProps) => {
  const navigation = useNavigation();
  return (
    <MyTouchableOpacity onPress={() => navigation.navigate(`${onPress}`)}>
      <View
        style={{
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <BlurView intensity={16} tint="light">
          <View className="flex flex-col px-4 py-4">
            <View className=" flex flex-row items-center gap-x-4">
              {icon}
              <Text className="text-white text-lg">{title}</Text>
            </View>
            {text && (
              <Text className="text-[#FFFFFF40] ml-12 mt-2">{text}</Text>
            )}
          </View>
        </BlurView>
      </View>
    </MyTouchableOpacity>
  );
};
