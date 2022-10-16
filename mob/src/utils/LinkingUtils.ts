import {Linking, Platform} from 'react-native';
import {SocialMediaType} from '../models/SocialMedia';

const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
const latLng = '45.246350,19.833350';
const label = 'Obrok za Porodicu 3M';

const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`,
});

const openUrl = (url: string, fallback?: string) =>
  Linking.canOpenURL(url)
    .then(() => Linking.openURL(url))
    .catch(() => fallback && Linking.openURL(fallback));

/**
 * Tries to open a social media page (FB, IN, YT) if app is present on phone. If not, it opens a fallback link
 *
 * @param id - profile id
 * @param type
 * @param link
 * @returns
 */
export const openPageOnSocialMedia = (
  id: string,
  type: SocialMediaType,
  link?: string,
) => {
  let url: string;
  switch (type) {
    case SocialMediaType.FACEBOOK:
      url = `fb://page/${id}`;
      break;
    case SocialMediaType.MESSENGER:
      url = `http://m.me/${id}`;
      break;
    case SocialMediaType.INSTAGRAM:
      url = `instagram://user?username=${id}`;
      break;
    case SocialMediaType.YOUTUBE:
      url = `vnd.youtube://channel/${id}`;
  }

  if (!url) {
    return;
  }

  openUrl(url, link);
};

export const openOPLocationOnMaps = () => openUrl(url!);

export const openPhoneApp = (phoneNumber: string) => {
  const url = `tel:${phoneNumber}`;
  openUrl(url);
};

export const openMailAPP = (email: string) => {
  const url = `mailto:${email}`;
  openUrl(url);
};
