import React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export const StartScreen = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/blur.png")}
      style={styles.background}
      resizeMode="cover"
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
  },
});

export default StartScreen;
