import React, { useState, useRef } from "react";
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  Text,
  TextInput,
} from "react-native";
import MaskInput from "react-native-mask-input";

interface IInputProps {
  labelText: string;
  value?: string;
  onChangeText?: (masked: string, unmasked: string) => void;
}

const Input: React.FC<IInputProps> = ({ labelText, value, onChangeText }) => {
  const [phone, setPhone] = useState(value || ""); // Masked value
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null); // Reference to MaskInput

  // Animated values for label
  const labelTop = useRef(new Animated.Value(20)).current; // Initial top position
  const labelFontSize = useRef(new Animated.Value(16)).current; // Initial font size
  const labelColor = useRef(new Animated.Value(0)).current; // Interpolated color

  const handleFocus = () => {
    setIsFocused(true);

    // Animate label to floating position
    Animated.timing(labelTop, {
      toValue: -20,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelFontSize, {
      toValue: 12,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelColor, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);

    // Animate label back to placeholder position if input is empty
    if (!phone) {
      Animated.timing(labelTop, {
        toValue: 20,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(labelFontSize, {
        toValue: 16,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(labelColor, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const interpolatedColor = labelColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FFFFFF66", "#FFFFFF66"],
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => inputRef.current?.focus()} // Focus the input when pressing anywhere
      accessible={false}
    >
      <View
        style={{
          width: "75%",
          position: "relative",
          borderBottomWidth: 1,
          borderColor: "#FFFFFF66",
          alignItems: "center",
          paddingVertical: 12, // Adds space between label and border
        }}
      >
        <Animated.Text
          style={{
            position: "absolute",
            top: labelTop, // Smoothly animates top position
            fontSize: labelFontSize, // Smoothly animates font size
            color: interpolatedColor, // Smoothly animates color
            textAlign: "center", // Centers the label
            left: 0,
            right: 0, // Ensures the label is centered
          }}
        >
          {labelText}
        </Animated.Text>
        <MaskInput
          ref={inputRef} // Attach the ref to MaskInput
          value={phone}
          onChangeText={(masked, unmasked) => {
            setPhone(masked); // Updates the masked value
            onChangeText?.(masked, unmasked); // Passes values to the parent component
          }}
          mask={[
            "+",
            "7",
            " ",
            "(",
            /\d/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="numbers-and-punctuation"
          keyboardAppearance="dark"
          placeholder=""
          placeholderTextColor="#EBFF00"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 16,
            color: "#EBFF00",
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
