import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface OPRadioButtonProps {
  text: string;
  selected: boolean;
  onSelect: () => void;
}

const OPRadioButton: React.FC<OPRadioButtonProps> = ({
  text,
  selected,
  onSelect,
}) => {
  const handleOnSelect = () => {
    onSelect();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnSelect}>
      <View
        style={[
          styles.whiteCircle,
          selected ? styles.selectedBorder : styles.deselectedBorder,
        ]}>
        {selected && <View style={styles.selected} />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OPRadioButton;
