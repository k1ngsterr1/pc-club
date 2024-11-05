import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface IPaymentSelector {
  name: string;
  price: string;
  onPress: () => void;
  marginTop?: number;
}

const PaymentSelector: React.FC<IPaymentSelector> = ({
  name,
  price,
  onPress,
  marginTop = 0,
}) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected); // Toggle the selected state
    onPress(); // Call the onPress function passed as a prop
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ marginTop }}
      className={`rounded-lg overflow-hidden ${
        selected ? "border-2 border-main" : ""
      }`}
    >
      {/* Blurred Background */}
      <BlurView
        intensity={30}
        tint="light"
        className="rounded-lg px-4 py-6 items-start"
      >
        <View className="flex-row justify-between w-full">
          <Text className="text-main text-xl font-normal">{name}</Text>
          <Text className="text-main text-xl font-normal">{price}тг</Text>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

export default PaymentSelector;
