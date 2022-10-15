import {View, Text, ViewStyle, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {TextStyles} from '../../../constants/TextStyles';
import {styles} from './styles';

interface OPMappedListWithTitleProps {
  title: string;
  data: any[];
  renderItem: (item: any, index: number, array: any[]) => React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const OPMappedListWithTitle: React.FC<OPMappedListWithTitleProps> = ({
  title,
  data,
  renderItem,
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[containerStyle]}>
      <Text style={[titleStyle, TextStyles.DOSIS_SEMI_BOLD, styles.text]}>
        {title}
      </Text>
      {data.map(renderItem)}
    </View>
  );
};

export default OPMappedListWithTitle;
