import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../constants/Colors';
import {TextStyles} from '../constants/TextStyles';

interface ToastProps {
  props: {
    title: string;
    description: string;
  };
}

export const toastConfig = {
  error: ({props}: ToastProps) => (
    <View style={{...styles.dialog, backgroundColor: Colors.RED_ERROR_TOAST}}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  ),
  success: ({props}: ToastProps) => (
    <View style={{...styles.dialog, backgroundColor: Colors.GREEN}}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  dialog: {
    width: '90%',
    borderRadius: 4,
    height: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  title: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    color: Colors.DARK_GRAY,
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'left',
    marginBottom: 12,
    marginTop: 10,
  },
  description: {
    ...TextStyles.DOSIS_REGULAR,
    color: Colors.DARK_GRAY,
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 14,
  },
});
