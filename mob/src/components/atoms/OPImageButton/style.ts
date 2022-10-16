import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.RED,
    borderRadius: 5,
  },
  text: {
    ...TextStyles.DOSIS_BOLD,
    fontSize: 16,
    color: Colors.WHITE,
    lineHeight: 17,
  },
});
