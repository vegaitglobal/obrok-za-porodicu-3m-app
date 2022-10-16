import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import OPMappedListWithTitle from '../../molecules/OPListWithTitle/OPMappedListWithTitle';
import {SocialMedia} from '../../../models/SocialMedia';
import {ContactModel} from '../../../models/ContactModel';
import OPImageButton from '../../atoms/OPImageButton/OPImageButton';
import OPSubheader from '../../atoms/OPSubheader/OPSubheader';
import {useTranslation} from 'react-i18next';

interface OPContactViewProps {
  headerTitle: string;
  onHeaderImagePress: () => void;
  socialMediaTitle: string;
  socialMedias: SocialMedia[];
  renderSociaMediaItem: (item: SocialMedia) => React.ReactNode;
  contactsTitle: string;
  contacts: ContactModel[];
  renderContactItem: (item: ContactModel) => React.ReactNode;
}

const IMAGE_URL = require('../../../../assets/images/opLocation/op_location.png');

const OPContactView: React.FC<OPContactViewProps> = ({
  headerTitle,
  onHeaderImagePress,
  socialMediaTitle,
  socialMedias,
  renderSociaMediaItem,
  contactsTitle,
  contacts,
  renderContactItem,
}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <OPSubheader heading={headerTitle} showDropdown={false} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <OPImageButton
          onPress={onHeaderImagePress}
          imageSource={IMAGE_URL}
          hasButton
          buttonText={t('contactScreen.openMaps')}
        />
        <View style={styles.listContainer}>
          <OPMappedListWithTitle
            title={socialMediaTitle}
            data={socialMedias}
            renderItem={renderSociaMediaItem}
          />
          <View style={styles.separator} />
          <OPMappedListWithTitle
            title={contactsTitle}
            data={contacts}
            renderItem={renderContactItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OPContactView;
