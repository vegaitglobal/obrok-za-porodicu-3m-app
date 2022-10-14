import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';

interface OPPrimaryButtonProps {
  text: string;
  onPress: () => void;
}

const OPPrimaryButton: React.FC<OPPrimaryButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>OPPrimaryButton</Text>
    </TouchableOpacity>
  );
};

export default OPPrimaryButton;
