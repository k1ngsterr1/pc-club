import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { BlurView } from "expo-blur";
import Text from "@shared/ui/Text/text";
import { useSelectCategoryStore } from "@entities/categories/model/use-select-category-store";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";

const { height } = Dimensions.get("window");

export const CategoriesPopup = () => {
  const { isVisible, hidePopup, setSelected } = useSelectCategoryStore();
  const translateY = useRef(new Animated.Value(height)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const closeAnim = (category: string) => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: height, // Move popup down off-screen
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      hidePopup();
      setSelected(category);
    });
  };

  useEffect(() => {
    if (isVisible) {
      // Reveal animation
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 5,
          friction: 7,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 6,
          tension: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }} />

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          opacity: opacity,
          transform: [{ translateY }, { scale }],
        }}
      >
        <BlurView
          intensity={80}
          tint="light"
          className="rounded-3xl overflow-hidden w-[90%] mx-auto"
        >
          <View className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2" />
          <View className="bg-opacity-20 p-5">
            <Text className="text-2xl font-bold mb-4 text-center text-white">
              Select category
            </Text>
            <View className="flex flex-row w-full justify-between mb-2">
              <MyTouchableOpacity
                onPress={() => closeAnim("STANDARD")}
                className="bg-main w-24 mt-4 h-16 items-center justify-center rounded-lg"
              >
                <Text weight="medium" className="text-dark text-center">
                  STANDART
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                onPress={() => closeAnim("PREMIUM")}
                className="bg-main w-24 mt-4 h-16 items-center justify-center rounded-lg"
              >
                <Text weight="medium" className="text-dark text-center">
                  PREMIUM
                </Text>
              </MyTouchableOpacity>
              <MyTouchableOpacity
                onPress={() => closeAnim("VIP")}
                className="bg-main w-24 mt-4 h-16 items-center justify-center rounded-lg"
              >
                <Text weight="medium" className="text-dark text-center">
                  VIP
                </Text>
              </MyTouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Animated.View>
    </View>
  );
};
