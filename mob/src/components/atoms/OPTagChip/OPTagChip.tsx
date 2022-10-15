import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {Colors} from '../../../constants/Colors';

type TagChipSize = 'small' | 'large';
type TagChipVariant = 'bright' | 'dark';

interface OPTagChipProps {
  text: string;
  size?: TagChipSize;
  color: string;
  initialVariant?: TagChipVariant;
  onPress?: (value: string) => void;
}

const OPTagChip: React.FC<OPTagChipProps> = ({
  text,
  size = 'small',
  color,
  initialVariant = 'dark',
  onPress = () => {},
}) => {
  const [variant, setVariant] = useState(initialVariant);

  const onPressHandler = (): void => {
    setVariant(variant === 'bright' ? 'dark' : 'bright');
    onPress(text);
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View
        style={[
          size &&
            (size === 'large' ? styles.tagChipLarge : styles.tagChipSmall),
          variant === 'dark'
            ? {borderColor: color}
            : {...styles.tagChipDark, backgroundColor: color},
        ]}
      >
        <Text
          style={[
            styles.tagChipLabel,
            {color: variant === 'bright' ? Colors.WHITE : color},
          ]}
        >
          {text.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OPTagChip;
