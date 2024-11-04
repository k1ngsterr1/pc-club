import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

type ReusableSwiperProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  gap?: number; // New prop to control the gap size
};

const ReusableSwiper = <T,>({
  data,
  renderItem,
  height = 273,
  loop = true,
  autoplay = true,
  autoplayTimeout = 3,
  gap = 20, // Default gap size
}: ReusableSwiperProps<T>) => {
  return (
    <Swiper
      showsPagination={false}
      horizontal
      loop={loop}
      autoplay={autoplay}
      autoplayTimeout={autoplayTimeout}
      height={height}
      className="mt-4"
    >
      {data.map((item, index) => (
        <View key={index} style={[styles.slide]}>
          {renderItem(item, index)}
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReusableSwiper;
