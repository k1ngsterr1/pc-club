import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ListRenderItem,
} from "react-native";
import { MiniBarcCard } from "../MiniBarCard/mini-bar-card";

const { width } = Dimensions.get("window");

// Define types for mini-bar items and slides
type MiniBarItem = {
  item: string;
  price: string;
};

type Slide = MiniBarItem[];

const miniBarContent: MiniBarItem[] = [
  { item: "Вода ASU, 0.5л.", price: "500₸" },
  { item: "Coca-Cola, 0.5л.", price: "600₸" },
  { item: "Sprite, 0.5л.", price: "600₸" },
  { item: "Fanta, 0.5л.", price: "600₸" },
  { item: "Чай Lipton, 0.5л.", price: "700₸" },
  { item: "Кофе, 0.5л.", price: "800₸" },
  { item: "Сок Rich, 0.33л.", price: "500₸" },
  { item: "Кофе, 0.5л.", price: "800₸" },
];

const groupItems = (data: MiniBarItem[], itemsPerSlide: number): Slide[] => {
  const slides: Slide[] = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    slides.push(data.slice(i, i + itemsPerSlide));
  }
  return slides;
};

export const BarSwiper: React.FC = () => {
  const slides = groupItems(miniBarContent, 2);

  const renderItem: ListRenderItem<Slide> = ({ item }) => (
    <View style={styles.slide}>
      {item.map((miniItem, index) => (
        <View key={index} style={styles.cardContainer}>
          <MiniBarcCard item={miniItem.item} price={miniItem.price} />
        </View>
      ))}
    </View>
  );

  return (
    <FlatList
      className="mt-4"
      data={slides}
      renderItem={renderItem}
      keyExtractor={(_, index) => `slide-${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToInterval={width}
      decelerationRate="fast"
      snapToAlignment="center"
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width,
  },
  cardContainer: {
    width: width * 0.5,
  },
});

export default BarSwiper;
