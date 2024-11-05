import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";
import Text from "../Text/text";
import { BlurView } from "expo-blur";
import { useActiveItem } from "@shared/model/useActiveItemStore";

interface TabSwitcherProps {
  tabs: string[];
}

export const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs }) => {
  const { active, setActive } = useActiveItem();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: tabs.indexOf(active),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [active, tabs]);

  const handleActive = (tab: string) => {
    setActive(tab);
  };

  const translateX = animatedValue.interpolate({
    inputRange: tabs.map((_, index) => index),
    outputRange: tabs.map((_, index) => index * (192 / tabs.length)),
  });

  useEffect(() => {
    setActive(tabs[0]);
  }, [tabs]);

  return (
    <View className="rounded-full overflow-hidden">
      <BlurView
        intensity={16}
        tint="light"
        className="flex-row w-48 h-9 bg-[rgba(255,255,255,0.05)] rounded-full relative"
      >
        <Animated.View
          className="absolute w-1/2 h-full bg-[#EBFF00] rounded-full"
          style={{ transform: [{ translateX }] }}
        />
        {tabs.map((tab, index) => {
          return (
            <MyTouchableOpacity
              key={index}
              onPress={() => handleActive(tab)}
              className="flex-1 items-center justify-center z-10"
            >
              <Text
                weight="medium"
                className={`${
                  active === tab ? "text-black font-bold" : "text-[#FFFFFF80]"
                }`}
              >
                {tab}
              </Text>
            </MyTouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
};
