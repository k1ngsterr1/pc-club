import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import { ReactNode } from "react";
import { BlurView } from "expo-blur";

// Icons
import HomeIcon from "@shared/icons/home-icon";
import LocationIcon from "@shared/icons/location-icon";
import ClockIcon from "@shared/icons/clock-icon";
import SettingsIcon from "@shared/icons/settings-icon";

interface TabTextProps {
  isActive: boolean;
  onPress: () => void;
  icon: ReactNode;
}

export const TabText: FC<TabTextProps> = ({ isActive, onPress, icon }) => {
  return (
    <MyTouchableOpacity onPress={onPress}>
      {React.cloneElement(icon as React.ReactElement<any>, { isActive })}
    </MyTouchableOpacity>
  );
};

export const BottomTabNavigation = () => {
  const navigation = useNavigation();

  const routeName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.name;
  });

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen as never);
  };

  const isActive = (screen: string) => routeName === screen;

  return (
    <BlurView intensity={48} style={styles.glassContainer}>
      <View style={styles.innerContainer}>
        <TabText
          icon={<HomeIcon />}
          isActive={isActive("Home")}
          onPress={() => handleNavigation("Home")}
        />
        <TabText
          icon={<LocationIcon />}
          isActive={isActive("Location")}
          onPress={() => handleNavigation("Location")}
        />
        <TabText
          icon={<ClockIcon />}
          isActive={isActive("Clock")}
          onPress={() => handleNavigation("Clock")}
        />
        <TabText
          icon={<SettingsIcon />}
          isActive={isActive("Settings")}
          onPress={() => handleNavigation("Settings")}
        />
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  glassContainer: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(217, 217, 217, 0.1)",
    overflow: "hidden",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
  },
});
