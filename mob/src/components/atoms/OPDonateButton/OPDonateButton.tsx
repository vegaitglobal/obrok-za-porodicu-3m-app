import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

interface OPDonateButtonProps {
  text: string;
  focused: boolean;
}

const OPDonateButton: React.FC<OPDonateButtonProps> = ({text, focused}) => {
  return (
    <View style={[styles.container, focused && styles.focusedContainer]}>
      <Text style={[styles.text, focused && styles.focusedText]}>{text}</Text>
    </View>
  );
};

export default OPDonateButton;
