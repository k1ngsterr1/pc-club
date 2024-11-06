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
import EqualizerLoader from "@shared/ui/Loader/loader";
import { PaymentPopup } from "@features/ui/PaymentPopup/payment-popup";
import { CategoriesPopup } from "@features/ui/CategoriesPopup/categories-popup";

interface ILayout {
  children: React.ReactNode;
  isTab?: boolean;
  isHeader?: boolean;
  isNotification?: boolean;
  isPlan?: boolean;
  isLogo?: boolean;
  isScrollable?: boolean;
}

export const Layout: React.FC<ILayout> = ({
  children,
  isTab,
  isHeader,
  isLogo,
  isScrollable = true,
  isNotification,
  isPlan,
}) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/blur.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <NotificationPopup />
      <PaymentPopup />
      <CategoriesPopup />
      <SafeAreaView className="flex-1">

        {isHeader && <Header isLogo={isLogo}
            isPlan={isPlan}
            isNotification={isNotification} />}
        {isScrollable ? (
          <ScrollView
            contentContainerStyle={{ paddingBottom: isTab ? 80 : 0 }}
            className="flex-1"
          >
            <View className="flex-1 px-4">{children}</View>
          </ScrollView>
        ) : (
          <View className="flex-1 px-4">{children}</View>
        )}
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

  content: {
    flex: 1,
  },
});
