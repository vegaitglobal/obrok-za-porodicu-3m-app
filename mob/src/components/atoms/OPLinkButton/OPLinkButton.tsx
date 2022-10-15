import {View, Text, ViewStyle, TouchableOpacity, TextStyle} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icons from '../../../constants/Icons';

interface OPLinkButtonProps {
  text: string;
  style?: ViewStyle;
  hasArrow?: boolean;
  textStyle?: TextStyle;
  onPress: () => void;
}

const OPLinkButton: React.FC<OPLinkButtonProps> = ({
  text,
  style = {},
  hasArrow = false,
  textStyle = {},
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {hasArrow && <View style={styles.icon}>{Icons.ARROW_RIGHT}</View>}
    </TouchableOpacity>
  );
};

export default OPLinkButton;
