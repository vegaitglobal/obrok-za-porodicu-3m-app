import {ImageSourcePropType} from 'react-native';

export enum SocialMediaType {
  MESSENGER = 'Messenger',
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  YOUTUBE = 'Youtube',
}

export interface SocialMedia {
  name: string;
  thumbnail: ImageSourcePropType;
  link: string;
  buttonLabel: string;
  buttonBGColor: string;
  buttonTextcolor: string;
  type: SocialMediaType;
  id: string;
}
