import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Colors } from '../../Colors';
import { Icons } from '../../Icons';
// import {  GoogleSigninButton } from '@react-native-google-signin/google-signin';
const { width } = Dimensions.get('window');

export const SocialButton = ({ onPress, icon }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={Icons[icon]} style={styles.icon}></Image>
        <Text style={
          styles.text
        }>{'Sign in With Google'}</Text>
      </TouchableOpacity>
    </View>

  );
};
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    marginStart: 10,
    alignSelf: 'center',
    color: Colors.secondaryTextColor,
    fontWeight: 'normal',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 15,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.secondaryBackGroundColor,
    shadowOffset: { width: -2, height: 3 },
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }

});
