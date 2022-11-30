import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { Colors } from '../../Colors';
import SearchIcon from '../../Assets/search.png';

const { width, height } = Dimensions.get('window');

export const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.searchbar}>
      <Image style={styles.icons} source={SearchIcon} />
      <TextInput
        style={styles.input}
        placeholder={'Search'}
        clearButtonMode={'always'}
        onChangeText={onChangeText}
        overflow="hidden"
        placeholderTextColor={Colors.primaryTextColor}
        keyboardAppearance="dark"
        color={Colors.primaryTextColor}
        autoCorrect={false} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    marginVertical: 5,
    textAlignVertical: 'center',
    paddingVertical: 8,
    paddingLeft: 5,
    width: width * .85
  },
  icons: {
    tintColor: Colors.primaryColor,
    height: 20,
    width: 20,
  },
  searchbar: {
    flexDirection: 'row',
    width: width * .82,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    shadowOpacity: .3,
    backgroundColor: Colors.secondaryBackGroundColor,
    shadowColor: Colors.primaryColor,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    },
  }
});
