import {View, Text} from 'react-native';
import React from 'react';
import {TextStyles} from '../../../constants/TextStyles';
import OPImageButton from '../../atoms/OPImageButton/OPImageButton';
import {styles} from './styles';

const image = require('../../../../assets/images/opLocation/op_location.png');

interface OPContactsHeaderProps {
  onImagePress: () => void;
  title: string;
}

const OPContactsHeader: React.FC<OPContactsHeaderProps> = ({
  onImagePress,
  title,
}) => (
  <View>
    <Text style={[TextStyles.DOSIS_EXTRA_BOLD, styles.textStyle]}>{title}</Text>
    <OPImageButton onPress={onImagePress} imageSource={image} />
  </View>
);

export default OPContactsHeader;
