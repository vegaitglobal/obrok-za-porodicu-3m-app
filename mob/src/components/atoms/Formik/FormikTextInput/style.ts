import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';
import {FontFamily} from '../../../../constants/FontFamily';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {
    fontFamily: FontFamily.DOSIS_REGULAR,
    fontWeight: '500',

    fontSize: 16,
    lineHeight: 16,
    alignSelf: 'flex-start',
    marginBottom: 4,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
    color: Colors.GRAY,
  },
  inputWrapper: {
    height: 58,
    width: 343,
    backgroundColor: 'transparent',
    borderColor: Colors.BG_LIGHT_GRAY,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  inputField: {
    fontFamily: FontFamily.ARCHIVO_REGULAR,
    fontSize: 16,
    lineHeight: 16,
    width: 327,
    borderRadius: 4,
    height: Platform.OS === 'android' ? 40 : 20,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    textAlign: 'left',
  },
  focusedText: {
    fontFamily: FontFamily.ARCHIVO_REGULAR,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.BROWN,
    textAlign: 'left',
  },
  text: {
    fontFamily: FontFamily.ARCHIVO_REGULAR,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.GRAY,
    textAlign: 'left',
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 9,
  },
  errorMessage: {
    fontFamily: FontFamily.ARCHIVO_REGULAR,
    fontSize: 14,
    lineHeight: 14,
    color: Colors.RED_ERROR,
    marginVertical: 5,
    marginLeft: 3,
  },
  errorContainer: {
    height: 20,
  },
  textArea: {
    height: 339,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
});
