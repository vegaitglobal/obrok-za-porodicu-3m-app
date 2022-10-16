import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import OPContactItem from '../components/molecules/OPContactItem/OPContactItem';
import OPSocialMeadiaItem from '../components/molecules/OPSocialMeadiaItem/OPSocialMeadiaItem';
import OPContactView from '../components/organisms/OPContactView/OPContactView';
import {socialMedia} from '../constants/socialMediaInfo';
import {ContactModel} from '../models/ContactModel';
import {SocialMedia} from '../models/SocialMedia';
import {getContacts} from '../store/actions/ContactAction';
import {selectContacts} from '../store/selectors/ContactSelectors';
import {AppThunkDispatch} from '../store/Store';
import {
  openMailAPP,
  openOPLocationOnMaps,
  openPageOnSocialMedia,
  openPhoneApp,
} from '../utils/LinkingUtils';

const renderSocialItem = (item: SocialMedia) => (
  <OPSocialMeadiaItem {...item} onPress={openPageOnSocialMedia} key={item.id} />
);

const renderContactItem = (item: ContactModel) => (
  <OPContactItem
    {...item}
    onCallPress={openPhoneApp}
    onMailPress={openMailAPP}
    key={item.id}
  />
);

const ContactScreen = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const contacts = useSelector(selectContacts);
  const {t} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      dispatch(getContacts());
    }, [dispatch]),
  );

  return (
    <OPContactView
      headerTitle={t('contactScreen.contact')}
      onHeaderImagePress={openOPLocationOnMaps}
      socialMediaTitle={t('contactScreen.socialMedia')}
      socialMedias={socialMedia}
      renderSociaMediaItem={renderSocialItem}
      contacts={contacts || []}
      contactsTitle={t('contactScreen.contactUs')}
      renderContactItem={renderContactItem}
    />
  );
};

export default ContactScreen;
