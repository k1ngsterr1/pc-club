import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { StartScreen } from "@app/screens/start-screen";
import { RegistrationScreen } from "@app/screens/sign-in-screen";
import { PhoneConfirmationScreen } from "@app/screens/phone-confirmation-screen";
import { HomeScreen } from "@app/screens/home-screen";
import { LocationScreen } from "@app/screens/our-clubs-screen";
import { SettingsScreen } from "@app/screens/settings-screen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Start"
  >
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen
      name="PhoneConfirmation"
      component={PhoneConfirmationScreen}
    />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="OurClubs" component={LocationScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);
