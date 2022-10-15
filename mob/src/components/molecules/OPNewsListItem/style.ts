import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: Colors.DARK_GRAY,
    backgroundColor: Colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: 125,
    borderRadius: 5,
  },
  content: {
    marginTop: 15,
  },
  title: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
  },
  description: {
    marginTop: 8,
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 16,
  },
  button: {
    marginTop: 25,
  },
});
