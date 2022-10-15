import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Colors} from '../../../constants/Colors';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';
import {VolunteerActionStatus} from '../../../models/VolunteerAction/VolunteerActionStatus';

interface OPTagChipsProps {}

const volunteerActions: string | any[] = [
  {
    id: 1,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 2,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 3,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 4,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 5,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 6,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 7,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 8,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
];

const renderItems = (data: VolunteerActionStatus[]) =>
  data.map(item => (
    <View key={item.id.toString()} style={styles.tagContainer}>
      <OPTagChip volunteerAction={item} color={Colors.ORANGE} size="large" />
      <View style={styles.divider} />
    </View>
  ));

const OPTagChips: React.FC<OPTagChipsProps> = ({}) => {
  return (
    <View style={styles.container}>
      {volunteerActions?.length > 0 && renderItems(volunteerActions)}
    </View>
  );
};

export default OPTagChips;
