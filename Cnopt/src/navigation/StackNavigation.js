import { createStackNavigator } from '@react-navigation/stack';
import ReminderPage from '../pages/ReminderPage';
import CarouselPage from '../pages/CarouselPage';
import ConnexionPage from '../pages/ConnexionPage';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarouselPage"
        component={CarouselPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReminderPage"
        component={ReminderPage}
        options={{
          headerTitle: '', // Remove the title
        }}
      />
      <Stack.Screen
        name="ConnexionPage"
        component={ConnexionPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
