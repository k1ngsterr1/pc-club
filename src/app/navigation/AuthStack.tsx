import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { StartScreen } from "@app/screens/start-screen";
import { RegistrationScreen } from "@app/screens/sign-in-screen";
import { PhoneConfirmationScreen } from "@app/screens/phone-confirmation-screen";
import { HomeScreen } from "@app/screens/home-screen";
import { LocationScreen } from "@app/screens/our-clubs-screen";
import { SettingsScreen } from "@app/screens/settings-screen";
import { MiniBar } from "@app/screens/mini-bar-screen";
import { BookScreen } from "@app/screens/book-screen";
import PaymentScreen from "@app/screens/payment-screen";

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
    <Stack.Screen name="MiniBar" component={MiniBar} />
    <Stack.Screen name="BookScreen" component={BookScreen} />
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
  </Stack.Navigator>
);
