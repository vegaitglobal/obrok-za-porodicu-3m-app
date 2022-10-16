import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

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
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  thumbnail: {height: 21, width: 21},
  name: {fontWeight: 'bold', marginLeft: 10},
  button: {
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 5,
    width: 110,
  },
  buttonText: {fontWeight: '700'},
});
