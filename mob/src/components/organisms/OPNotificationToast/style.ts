import {Platform, StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 50,
      },
      android: {
        top: 20,
      },
    }),
    backgroundColor: Colors.RED,
    alignSelf: 'center',
    minHeight: 80,
    marginHorizontal: 10,
    borderRadius: 4,
    width: '95%',
    borderWidth: 1,
    borderColor: Colors.ORANGE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  textContainer: {
    zIndex: 99999,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    ...TextStyles.DOSIS_BOLD,
    fontSize: 16,
    zIndex: 9999,
    color: Colors.WHITE,
  },
  text: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 16,
    marginHorizontal: 20,
    zIndex: 9999,
    color: Colors.WHITE,
  },
  slider: {
    width: 80,
    height: 3,
    zIndex: 9999,
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: Colors.WHITE_80,
    borderRadius: 5,
    marginBottom: 5,
  },
  importantText: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    textDecorationLine: 'underline',
    zIndex: 9999,
  },
  blurContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
});
