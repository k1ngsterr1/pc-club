import React from "react";
import { SafeAreaView, ImageBackground, StyleSheet, View } from "react-native";
import { BottomTabNavigation } from "@widgets/ui/BottomTabNavigation/bottom-tab-navigation";

interface ILayout {
  children: React.ReactNode;
  isTab?: boolean;
}

export const Layout: React.FC<ILayout> = ({ children, isTab }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/blur.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>{children}</View>
        {isTab && <BottomTabNavigation />}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#252525",
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
