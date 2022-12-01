import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { SearchBar } from '../../Components/Atoms/SearchBar';
import { Colors } from '../../Colors';
import FastImage from 'react-native-fast-image';
import CarouselCards  from '../../Components/Molecules/MyCarousel';

export const HomeComponents = props => {
  const { userInfo, onChangeText } = props;
  return (
    <SafeAreaView style={styles.screen}>

      {/*<View style={{ flexDirection: 'row', alignItems: 'center' }}>*/}
      {/*  /!*<SearchBar onChangeText={onChangeText}></SearchBar>*!/*/}
      {/*  <FastImage style={styles.userIcon} source={*/}
      {/*    {*/}
      {/*      uri: 'https://www.mazars.sg/var/mazars/storage/images/media/global-contents/group-data-base/generated-user-photograph-pictures/chong-fah-yow2/30236761-2-eng-GB/Chong-Fah-Yow.jpg'*/}
      {/*      ,*/}
      {/*      priority: FastImage.priority.high, }} />*/}
      {/*</View>*/}
      <CarouselCards/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGroundColor,
  },
  header: {
    color: Colors.primaryColor,
    fontSize: 16,
  },
  userIcon: {
    position: 'absolute',
    right: 10,
    borderRadius: 20,
    tintColor: Colors.primaryTextColor,
    width: 35, height: 35,
  }
});
