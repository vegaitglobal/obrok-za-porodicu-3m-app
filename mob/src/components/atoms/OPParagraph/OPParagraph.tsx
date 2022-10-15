import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface OPParagraphProps {
  rowDescription?: string;
  description: string;
}

const OPParagraph: FC<OPParagraphProps> = ({rowDescription, description}) => {
  return (
    <View style={styles.textContainer}>
      {rowDescription && (
        <Text style={styles.textHeading}>{rowDescription}</Text>
      )}
      <Text style={styles.textContent}>{description}</Text>
    </View>
  );
};

export default OPParagraph;
