import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../../constants/Colors';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';

interface OPTagChipsProps {}

const OPTagChips: React.FC<OPTagChipsProps> = ({}) => {
  return (
    <View>
      <View style={styles.topRow}>
        <OPTagChip text="HRANA" color={Colors.ORANGE} size="large" />
        <View style={styles.divider} />
        <OPTagChip text="NOVAC" color={Colors.GREEN} size="large" />
        <View style={styles.divider} />
        <OPTagChip text="ODEĆA I OBUĆA" color={Colors.PURPLE} size="large" />
      </View>
      <View style={styles.bottomRow}>
        <OPTagChip text="OSTALO" color={Colors.BROWN} size="large" />
        <View style={styles.divider} />
        <OPTagChip text="ROĐENDANI" color={Colors.LIGHT_PINK} size="large" />
      </View>
    </View>
  );
};

export default OPTagChips;
