import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Animated,
  Dimensions,
  ScrollView,
  PanResponder,
} from "react-native";
import { BlurView } from "expo-blur";
import Text from "@shared/ui/Text/text";
import { useSelectCategoryStore } from "@entities/categories/model/use-select-category-store";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";

const { height } = Dimensions.get("window");

export const CategoriesPopup = () => {
  const { isVisible, hidePopup } = useSelectCategoryStore();
  const translateY = useRef(new Animated.Value(height)).current;
  const panY = useRef(new Animated.Value(0)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(translateY, {
    toValue: height,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 5;
      },
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          closeAnim.start(() => {
            hidePopup();
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
            Select category
          </Text>
          <View className="flex flex-row w-full justify-between">
            <MyTouchableOpacity className="bg-main rounded-full py-3 mt-4 px-6">
              <Text className="text-dark font-semibold text-center">
                STANDART
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity className="bg-main rounded-full py-3 mt-4 px-6">
              <Text className="text-dark font-semibold text-center">
                PREMIUM
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity className="bg-main rounded-full py-3 mt-4 px-5">
              <Text className="text-dark font-semibold text-center">VIP </Text>
            </MyTouchableOpacity>
          </View>
        </ScrollView>
      </BlurView>
    </Animated.View>
  );
};
