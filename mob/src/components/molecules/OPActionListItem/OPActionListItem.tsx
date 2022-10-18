import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../constants/Colors';
import Icons from '../../../constants/Icons';
import {VolunteerActionDTO} from '../../../models/VolunteerAction/VolunteerActionDTO';
import {RootState} from '../../../store/reducers/RootReducer';
import {getRandomColor} from '../../../utils/getRandomColor';
import OPImage from '../../atoms/OPImage/OPImage';
import OPLinkButton from '../../atoms/OPLinkButton/OPLinkButton';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';
import {styles} from './style';

interface OPActionListItemProps {
  action: VolunteerActionDTO;
  onPress: (id: number) => void;
  onAddToFavourites: (action: VolunteerActionDTO) => void;
  onRemoveFromFavourites: (id: number) => void;
}

const OPActionListItem: React.FC<OPActionListItemProps> = ({
  action,
  onPress,
  onAddToFavourites,
  onRemoveFromFavourites,
}) => {
  const {t} = useTranslation();
  const isFavourite: boolean = !!useSelector(
    (state: RootState) => state.favourites.actions,
  ).find(
    (favouriteAction: VolunteerActionDTO) => favouriteAction.id === action.id,
  );

  const backgroundColor: string =
    action.status?.id === 1 ? Colors.BG_GREEN : Colors.WHITE;
  const statusColor: string =
    action.status?.id === 1 ? Colors.GREEN : Colors.ORANGE;

  const handleGoToAction = () => {
    onPress(action.id);
  };

  const manageFavourites = () => {
    isFavourite ? onRemoveFromFavourites(action.id) : onAddToFavourites(action);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleGoToAction}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.topContainer}>
        <OPTagChip
          fill
          disabled
          size={'large'}
          color={getRandomColor(action.type?.id || 0)}
          volunteerAction={action.type}
          style={styles.chip}
        />
        <TouchableOpacity onPress={manageFavourites} style={{}}>
          {isFavourite ? Icons.STAR_FULL : Icons.STAR_EMPTY}
        </TouchableOpacity>
      </View>
      {action.imageURL && action.imageURL.length > 0 && (
        <OPImage source={{uri: action.imageURL}} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{action.title}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>{t('actionsList.status')}</Text>
          <Text style={[styles.status, {color: statusColor}]}>
            {action.status?.name}
          </Text>
        </View>
        <Text style={styles.description}>{action.shortDescription}</Text>
        <OPLinkButton
          text={t('actionsList.find_out_more')}
          onPress={handleGoToAction}
          style={styles.button}
          hasArrow
        />
      </View>
    </TouchableOpacity>
  );
};

export default OPActionListItem;
