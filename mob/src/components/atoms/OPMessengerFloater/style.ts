import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  maskedView: {
    position: 'absolute',
    right: 0,
    bottom: Dimensions.get('window').height / 3,
  },
});
