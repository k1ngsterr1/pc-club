import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { StartScreen } from "@app/screens/start-screen";
import { RegistrationScreen } from "@app/screens/sign-in-screen";
import { PhoneConfirmationScreen } from "@app/screens/phone-confirmation-screen";
import { HomeScreen } from "@app/screens/home-screen";
import { LocationScreen } from "@app/screens/our-clubs-screen";
import { MapScreen } from "@app/screens/map-screen";
import { SettingsScreen } from "@app/screens/settings-screen";
import { ProfileScreen } from "@app/screens/profile-screen";
import { CardsScreen } from "@app/screens/cards-screen";
import { HistoryScreen } from "@app/screens/history-screen";
import { DeleteAccScreen } from "@app/screens/delete-acc-screen";
import { MiniBar } from "@app/screens/mini-bar-screen";
import { BookScreen } from "@app/screens/book-screen";
import { PaymentScreen } from "@app/screens/payment-screen";
import { HoursScreen } from "@app/screens/hours-screen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen
      name="PhoneConfirmation"
      component={PhoneConfirmationScreen}
    />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="OurClubs" component={LocationScreen} />
    <Stack.Screen name="MapScreen" component={MapScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="CardsScreen" component={CardsScreen} />
    <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    <Stack.Screen name="DeleteAccScreen" component={DeleteAccScreen} />
    <Stack.Screen name="MiniBar" component={MiniBar} />
    <Stack.Screen name="BookScreen" component={BookScreen} />
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    <Stack.Screen name="HoursScreen" component={HoursScreen} />
  </Stack.Navigator>

);
