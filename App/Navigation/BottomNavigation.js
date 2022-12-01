import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Profile
} from '../Screens';
import { routes } from './routes';
import { Colors } from '../Colors';
import {
  Image,
  View
} from 'react-native';
import { Icons } from '../Icons';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        headerShown: false,
        tabBarStyle: { position: 'absolute' },
        tabBarActiveBackgroundColor: Colors.secondaryBackGroundColor,
        tabBarInactiveBackgroundColor: Colors.secondaryBackGroundColor,
        tabBarBackground: () => (
          <View style={{ paddingBottom: 20 }} />
        ),
        tabBarActiveTintColor: Colors.activeColor,
        tabBarInactiveTintColor: Colors.inactiveColor,
        tabBarIcon: ({ focused, color }) => {
          return <Image source={Icons[route.name]} style={{
            height: 20,
            width: 20,
            tintColor: focused ? Colors.activeColor : Colors.inactiveColor
          }} />;
        },
      })}
  >
    <Tab.Screen name={routes.HOME} component={Home} />
    <Tab.Screen name={routes.PROFILE} component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
