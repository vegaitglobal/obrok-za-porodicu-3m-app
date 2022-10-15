import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './style';

interface OPLinkButtonProps {
  text: string;
  style?: ViewStyle;
  hasArrow?: boolean;
  onPress: () => void;
}

const OPLinkButton: React.FC<OPLinkButtonProps> = ({
  text,
  style = {},
  hasArrow = false,
  onPress,
}) => {
  return (
    <View>
      <Text>OPLinkButton</Text>
    </View>
  );
};

export default OPLinkButton;
