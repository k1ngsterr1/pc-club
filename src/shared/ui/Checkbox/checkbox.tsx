import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CheckboxProps {
  label: string;
  onToggle: (checked: boolean) => void;
  marginTop?: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onToggle,
  marginTop = 0,
}) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
    onToggle(!checked);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ marginTop }}
      className="rounded-lg overflow-hidden "
    >
      <BlurView
        intensity={30}
        tint="light"
        className="flex-row items-center px-4 py-6 rounded-lg"
      >
        <Text className="text-main text-lg font-bold flex-1">{label}</Text>
        <View
          className={`w-8 h-8 rounded-full border-2 border-main ${
            checked ? "bg-main" : "bg-transparent"
          }`}
        />
      </BlurView>
    </TouchableOpacity>
  );
};

export default Checkbox;
