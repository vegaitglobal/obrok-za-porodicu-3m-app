import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {styles} from './style';

interface OPBadgeProps {
  value: number | string;
}

const OPBadge: FC<OPBadgeProps> = ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default OPBadge;
