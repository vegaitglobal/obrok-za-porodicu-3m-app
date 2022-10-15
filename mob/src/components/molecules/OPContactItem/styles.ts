import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
  },
  textContainer: {flex: 1.1},
  titleStyle: {fontSize: 16, fontWeight: '700', marginBottom: 5},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 0.9,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 5,
  },
  buttonText: {fontWeight: '700'},
  text: {
    ...TextStyles.DOSIS_REGULAR,
    fontWeight: '400',
    fontSize: 14,
  },
});
