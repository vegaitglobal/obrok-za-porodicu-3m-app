import React from 'react';
import Icons from '../../constants/Icons';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Colors} from '../../constants/Colors';

type CheckboxProps = {
  isChecked: boolean;
  onCheckStateChange?: (isChecked: boolean) => void;
};

export const Checkbox = ({isChecked, onCheckStateChange}: CheckboxProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => onCheckStateChange?.(!isChecked)}>
      <View
        style={{
          width: 25,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderRadius: 4,
          borderColor: Colors.RED,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {isChecked ? Icons.CHECK_SOLID : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
