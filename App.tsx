import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import StartScreen from "@app/screens/start-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    "OpenSans-BoldItalic": require("./assets/fonts/OpenSans/OpenSans-BoldItalic.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBoldItalic": require("./assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
    "OpenSans-Italic": require("./assets/fonts/OpenSans/OpenSans-Italic.ttf"),
    "OpenSans-LightItalic": require("./assets/fonts/OpenSans/OpenSans-LightItalic.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans/OpenSans-Light.ttf"),
    "OpenSans-MediumItalic": require("./assets/fonts/OpenSans/OpenSans-MediumItalic.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans/OpenSans-Medium.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "OpenSans-SemiBoldItalic": require("./assets/fonts/OpenSans/OpenSans-SemiBoldItalic.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
  });

  useEffect(() => {
    const prepareApp = async () => {
      // Any additional setup can go here
      setIsLoading(false);
    };

    prepareApp();
  }, []);

  if (isLoading || !fontsLoaded) {
    // return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#FFF4F6" },
        }}
      >
        <StartScreen />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
