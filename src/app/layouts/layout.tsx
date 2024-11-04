import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { BottomTabNavigation } from "@widgets/ui/BottomTabNavigation/bottom-tab-navigation";
import { Header } from "@features/ui/Header/header";

interface ILayout {
  children: React.ReactNode;
  isTab?: boolean;
  isHeader?: boolean;
  isLogo?: boolean;
}

export const Layout: React.FC<ILayout> = ({
  children,
  isTab,
  isHeader,
  isLogo,
}) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/blur.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        {isHeader && <Header isLogo={isLogo} />}
        <ScrollView
          contentContainerStyle={{ paddingBottom: isTab ? 16 : 0 }}
          className="flex-1"
        >
          <View className="flex-1 px-4">{children}</View>
        </ScrollView>
        {isTab && <BottomTabNavigation />}
      </SafeAreaView>
      {isTab && <BottomTabNavigation />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#252525",
  },

  content: {
    flex: 1,
  },
});
