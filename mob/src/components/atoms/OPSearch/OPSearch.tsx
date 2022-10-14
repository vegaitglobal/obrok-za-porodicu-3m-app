import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Icons from '../../../constants/Icons';

import {styles} from './style';

interface OPSearchProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const OPSearch: FC<OPSearchProps> = ({value, placeholder, onChangeText}) => (
  <View style={styles.container}>
    {Icons.LIGHTER_GRAY_SEARCH}
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      allowFontScaling
      clearTextOnFocus
      placeholder={placeholder}
      placeholderTextColor={Colors.LIGHTER_GRAY}
      returnKeyType="done"
    />
  </View>
);

export default OPSearch;
