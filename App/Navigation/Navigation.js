import { Login } from '../Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';
import BottomNavigation from '../Navigation/BottomNavigation';

const Stack = createNativeStackNavigator();
export const Navigator = () => {
  return (

    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.BOTTOM_NAVIGATION} component={BottomNavigation} />
    </Stack.Navigator>
  );
};
