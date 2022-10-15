import React from 'react';
import {View} from 'react-native';
import {RadioButtonType} from '../../../constants/RadioButtonType';
import OPRadioButton from '../../atoms/OPRadioButton/OPRadioButton';
import {styles} from './style';

interface OPRadioButtonsRowProps {
  leftText: string;
  rightText: string;
  leftSelected: boolean;
  rightSelected: boolean;
  onSelect: (side: RadioButtonType) => void;
}

const OPRadioButtonsRow: React.FC<OPRadioButtonsRowProps> = ({
  leftSelected,
  leftText,
  rightSelected,
  rightText,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      <OPRadioButton
        text={leftText}
        selected={leftSelected}
        onSelect={() => onSelect(RadioButtonType.LEFT)}
      />
      <OPRadioButton
        text={rightText}
        selected={rightSelected}
        onSelect={() => onSelect(RadioButtonType.RIGHT)}
      />
    </View>
  );
};

export default OPRadioButtonsRow;
