import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {styles} from './style';

interface OPPrimaryButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const OPPrimaryButton: React.FC<OPPrimaryButtonProps> = ({
  text,
  style = {},
  disabled = false,
  textStyle = {},
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, style, disabled && styles.disabledContainer]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OPPrimaryButton;
