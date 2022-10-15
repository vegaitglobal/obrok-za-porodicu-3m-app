import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  maskedView: {
    position: 'absolute',
    right: 10,
    bottom: Dimensions.get('window').height / 10,
  },
});
