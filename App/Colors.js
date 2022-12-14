import { Appearance } from 'react-native';
// const colorScheme = 'Dark';
const colorScheme = Appearance.getColorScheme();

export const DarkMode = {
  theme: 'Dark',
  primaryColor: '#002147',
  secondaryColor: '#76b8ff',
  tertiaryColor: '#DED8E1',
  activeColor: '#002147',
  inactiveColor: 'grey',
  lightPrimaryColor: '#894eff',
  primaryTextColor: '#fff',
  secondaryTextColor: '#e2d5f0',
  whitTextColor: '#fff',
  tertiaryTextColor: '#e2d5f0',
  secondaryBackGroundColor: '#0f1118',
  backGroundColor: '#111216',
  greyBackground: '#1d1233',
  lightBackground: '#f4eafe',
  secondaryPurple: '#8e7dc4',
  ModalBackground: '#1d1233',
};
export const LightMode = {
  theme: 'Light',
  primaryColor: '#002147',
  secondaryColor: '#76b8ff',
  tertiaryColor: '#6d5a75',
  activeColor: '#002147',
  inactiveColor: 'grey',
  lightPrimaryColor: '#894eff',
  whitTextColor: '#fff',
  primaryTextColor: '#000',
  secondaryTextColor: '#1a004f',
  tertiaryTextColor: '#6d5a75',
  backGroundColor: '#fff',
  secondaryBackGroundColor: '#fff',
  greyBackground: '#F5F5F5',
  secondaryPurple: '#8e7dc4',
  lightBackground: '#f4eafe',
  ModalBackground: '#1a004f'
};
export const Colors =
  colorScheme === 'Dark' ? DarkMode : LightMode;
