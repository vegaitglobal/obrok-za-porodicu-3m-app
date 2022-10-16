import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NewsDTO} from '../../../models/News/NewsDTO';
import {styles} from './style';
import OPImage from '../../atoms/OPImage/OPImage';
import OPLinkButton from '../../atoms/OPLinkButton/OPLinkButton';
import {useTranslation} from 'react-i18next';

interface OPNewsListItemProps {
  news: NewsDTO;
  onPress: (id: number) => void;
}

const OPNewsListItem: React.FC<OPNewsListItemProps> = ({news, onPress}) => {
  const {t} = useTranslation();

  const handleGoToNews = () => {
    onPress(news.id);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleGoToNews}
      style={styles.container}>
      {news.imageURL && news.imageURL.length > 0 && (
        <OPImage source={{uri: news.imageURL}} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.shortDescription}</Text>
        <OPLinkButton
          text={t('actionsList.find_out_more')}
          onPress={handleGoToNews}
          style={styles.button}
          hasArrow
        />
      </View>
    </TouchableOpacity>
  );
};

export default OPNewsListItem;
