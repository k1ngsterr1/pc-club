import React from "react";
import { SafeAreaView, ImageBackground, StyleSheet } from "react-native";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/blur.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#252525",
  },
});
