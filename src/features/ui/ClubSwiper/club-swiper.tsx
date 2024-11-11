import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { ClubCard } from "../ClubCard/club-card";

const { width } = Dimensions.get("window");

const clubsContent = [
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
  {
    clubName: "PC Club Name",
    clubLocation: "Улица Жандосова, 58 / 1",
    distance: 4,
  },
];

const ClubsSwiper = () => {
  return (
    <Swiper
      showsPagination={false}
      horizontal={true}
      loop={true}
      height={273}
      autoplayTimeout={3}
    >
      {clubsContent.map((club, index) => {
        return (
          <View className="mb-4 flex flex-co  mr-1 mt-4">
            <ClubCard
              key={index}
              clubName={club.clubName}
              clubLocation={club.clubLocation}
              distance={club.distance}
            />
          </View>
        );
      })}
    </Swiper>
  );
};

export default ClubsSwiper;
