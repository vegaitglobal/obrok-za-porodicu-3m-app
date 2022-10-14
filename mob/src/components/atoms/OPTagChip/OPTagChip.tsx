import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../../constants/Colors';

type TagChipSize = 'small' | 'large';
type TagChipVariant = 'bright' | 'dark';

interface OPTagChipProps {
  text: string;
  size: TagChipSize;
  color: string;
  variant: TagChipVariant;
}

const OPTagChip: React.FC<OPTagChipProps> = ({text, size, color, variant}) => {
  let labelStyle: TextStyle[] = [styles.tagChipLabel];

  return (
    <View
      style={[
        size === 'large' ? styles.tagChipLarge : styles.tagChipSmall,
        variant === 'dark' ? {borderColor: color} : {backgroundColor: color},
        variant === 'dark' && styles.tagChipDark,
      ]}>
      <Text
        style={[
          labelStyle,
          {color: variant === 'bright' ? Colors.WHITE : color},
        ]}>
        {text.toUpperCase()}
      </Text>
    </View>
  );
};

export default OPTagChip;
