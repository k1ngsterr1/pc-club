import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import Text from "../Text/text";

const BAR_COUNT = 4;
const ANIMATION_DURATION = 1000;
const DELAY_BETWEEN_BARS = 200;

export default function EqualizerLoader() {
  const animatedValues = useRef(
    Array(BAR_COUNT)
      .fill(0)
      .map(() => new Animated.Value(1))
  ).current;

  useEffect(() => {
    const animations = animatedValues.map((value, index) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 0.3,
            duration: ANIMATION_DURATION / 2,
            delay: index * DELAY_BETWEEN_BARS,
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 1,
            duration: ANIMATION_DURATION / 2,
            useNativeDriver: true,
          }),
        ])
      );
    });

    Animated.parallel(animations).start();

    return () => animations.forEach((anim) => anim.stop());
  }, []);

  return (
    <View className="flex-1 bg-dark h-[100vh] w-[100vw] top-0 absolute z-[200] justify-center items-center">
      <View className="flex-row h-12 items-end">
        {animatedValues.map((value, index) => (
          <Animated.View
            key={index}
            className="w-2 h-12 bg-main mx-1 rounded-full"
            style={{
              transform: [{ scaleY: value }],
            }}
          />
        ))}
      </View>
      <Text className="text-white text-sm mt-4 opacity-75">
        Powered By <Text className="text-main">Spark Studio</Text>
      </Text>
    </View>
  );
}
