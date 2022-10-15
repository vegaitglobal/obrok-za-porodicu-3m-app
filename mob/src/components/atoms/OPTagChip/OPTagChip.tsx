import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {ActionType} from '../../../models/VolunteerAction/VolunteerActionDTO';
import {styles} from './style';

type TagChipSize = 'small' | 'large';

interface OPTagChipProps {
  size?: TagChipSize;
  color: string;
  volunteerAction: ActionType;
  fill?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  onPress?: (value: ActionType, color: string) => void;
}

const OPTagChip: React.FC<OPTagChipProps> = ({
  size = 'small',
  color,
  volunteerAction,
  fill = false,
  style,
  onPress = () => {},
  disabled = false,
}) => {
  const onPressHandler = (): void => onPress(volunteerAction, color);

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.6}>
      <View
        style={[
          size &&
            (size === 'large' ? styles.tagChipLarge : styles.tagChipSmall),
          !fill ? {borderColor: color} : {backgroundColor: color},
          style,
        ]}>
        <Text
          style={[styles.tagChipLabel, {color: fill ? Colors.WHITE : color}]}>
          {volunteerAction.name.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OPTagChip;
