import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabButton: {
    width: (Dimensions.get('screen').width - 140) / 4,
  },
  leftCoupleButtons: {
    flexDirection: 'row',
  },
  rightCoupleButtons: {
    flexDirection: 'row',
  },
  donateButton: {
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: Dimensions.get('screen').width / 2 - 50,
    paddingBottom: 20,
  },
});
