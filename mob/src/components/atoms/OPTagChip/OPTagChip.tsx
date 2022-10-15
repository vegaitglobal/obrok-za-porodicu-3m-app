import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../../constants/Colors';
import {VolunteerActionStatus} from '../../../models/VolunteerAction/VolunteerActionStatus';

type TagChipSize = 'small' | 'large';

interface OPTagChipProps {
  size?: TagChipSize;
  color: string;
  volunteerAction: VolunteerActionStatus;
  fill?: boolean;
  onPress?: (value: VolunteerActionStatus) => void;
}

const OPTagChip: React.FC<OPTagChipProps> = ({
  size = 'small',
  color,
  volunteerAction,
  fill = false,
  onPress = () => {},
}) => {
  const onPressHandler = (): void => onPress(volunteerAction);

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View
        style={[
          size &&
            (size === 'large' ? styles.tagChipLarge : styles.tagChipSmall),
          !fill
            ? {borderColor: color}
            : {...styles.tagChipDark, backgroundColor: color},
        ]}
      >
        <Text
          style={[styles.tagChipLabel, {color: fill ? Colors.WHITE : color}]}
        >
          {volunteerAction.name.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OPTagChip;
