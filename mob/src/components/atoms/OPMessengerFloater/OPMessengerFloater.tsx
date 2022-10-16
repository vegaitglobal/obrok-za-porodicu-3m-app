import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from './style';
import {openPageOnSocialMedia} from '../../../utils/LinkingUtils';
import {SocialMediaType} from '../../../models/SocialMedia';
import {messenger, socialMedia} from '../../../constants/socialMediaInfo';

const OPMessengerFloater = () => {
  const facebookId: string = socialMedia.filter(
    e => e.type === SocialMediaType.FACEBOOK,
  )[0].id;

  return (
    <View style={style.maskedView}>
      <TouchableOpacity
        onPress={() =>
          openPageOnSocialMedia(facebookId, SocialMediaType.MESSENGER)
        }>
        <Image source={messenger} />
      </TouchableOpacity>
    </View>
  );
};

export default OPMessengerFloater;
