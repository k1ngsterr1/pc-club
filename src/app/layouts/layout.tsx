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
import { NotificationPopup } from "@shared/ui/NotificationPopup/notification-popup";
import { Loader } from "@shared/ui/Loader/loader";
import { PaymentPopup } from "@features/ui/PaymentPopup/payment-popup";

interface ILayout {
  children: React.ReactNode;
  isTab?: boolean;
  isHeader?: boolean;
  isNotification?: boolean;
  isPlan?: boolean;
  plan?: string;
  isLogo?: boolean;
}

export const Layout: React.FC<ILayout> = ({
  children,
  isTab,
  isHeader,
  isLogo,
  isNotification,
  isPlan,
  plan,
}) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/blur.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <NotificationPopup />
      <PaymentPopup />
      <SafeAreaView className="flex-1">
        {isHeader && (
          <Header
            isLogo={isLogo}
            isPlan={isPlan}
            isNotification={isNotification}
          />
        )}
        <ScrollView
          contentContainerStyle={{ paddingBottom: isTab ? 80 : 0 }}
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
