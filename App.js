import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './App/Navigation/Navigation';
import {
  Appearance,
  StatusBar
} from 'react-native';

const colorScheme = Appearance.getColorScheme();
export default function App () {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={colorScheme === 'Light' ? 'light-content' : 'dark-content'}
      />
      <Navigator />
    </NavigationContainer>
  );
}
