import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { StartScreen } from "@app/screens/start-screen";
import { RegistrationScreen } from "@app/screens/sign-in-screen";
import { PhoneConfirmationScreen } from "@app/screens/phone-confirmation-screen";

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
  </Stack.Navigator>
);
