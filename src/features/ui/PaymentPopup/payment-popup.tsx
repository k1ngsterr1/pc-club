import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Animated,
  Dimensions,
  ScrollView,
  PanResponder,
} from "react-native";
import { BlurView } from "expo-blur";
import { usePaymentPopupStore } from "@entities/payment/model/use-payment-popup";
import Text from "@shared/ui/Text/text";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";

const { height } = Dimensions.get("window");

export const PaymentPopup = () => {
  const [cardNumber, setCardNumber] = useState("");
  const { price, isVisible, hidePaymentPopup } = usePaymentPopupStore();
  const translateY = useRef(new Animated.Value(height)).current;
  const panY = useRef(new Animated.Value(0)).current;

  const closeAnim = Animated.timing(translateY, {
    toValue: height,
    duration: 300,
    useNativeDriver: true,
  });

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 0, // Only respond to downward drags
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          // Allow only downward movement
          panY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          // Threshold to close
          closeAnim.start(() => {
            hidePaymentPopup();
            panY.setValue(0);
          });
        } else {
          resetPositionAnim.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (isVisible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 5,
        friction: 7,
      }).start();
    } else {
      closeAnim.start();
    }
  }, [isVisible]);

  const handleContinue = () => {
    console.log("Continuing with payment");
  };

  const translateYWithPan = Animated.add(translateY, panY);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{ translateY: translateYWithPan }],
        },
      ]}
      className="z-50"
      {...panResponder.panHandlers}
    >
      <BlurView
        intensity={80}
        tint="light"
        className="rounded-t-3xl overflow-hidden"
      >
        <View className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2" />
        <ScrollView className="bg-opacity-20 p-6">
          <Text className="text-2xl font-bold mb-4 text-center text-white">
            Confirm Payment
          </Text>
          <View className="w-full flex flex-row items-center justify-between mt-4">
            <Text className="text-white text-xl">Вода ASU, 0.5л.</Text>
            <View className="bg-main rounded-full px-3 py-1">
              <Text>1</Text>
            </View>
          </View>
          <View className="flex-row justify-between mb-4"></View>
          <MyTouchableOpacity
            className="bg-main rounded-full py-3 mt-4 px-6 w-full"
            onPress={handleContinue}
          >
            <Text className="text-dark font-semibold text-center">
              Continue
            </Text>
          </MyTouchableOpacity>
        </ScrollView>
      </BlurView>
    </Animated.View>
  );
};
