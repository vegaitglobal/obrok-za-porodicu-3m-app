import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import OPContactsHeader from '../../molecules/OPContactsHeader/OPContactsHeader';
import OPMappedListWithTitle from '../../molecules/OPListWithTitle/OPMappedListWithTitle';
import {SocialMedia} from '../../../models/SocialMedia';
import {ContactModel} from '../../../models/ContactModel';

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

const OPContactView: React.FC<OPContactViewProps> = ({
  headerTitle,
  onHeaderImagePress,
  socialMediaTitle,
  socialMedias,
  renderSociaMediaItem,
  contactsTitle,
  contacts,
  renderContactItem,
}) => (
  <SafeAreaView>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <OPContactsHeader title={headerTitle} onImagePress={onHeaderImagePress} />
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

export default OPContactView;
