import {ImageSourcePropType} from 'react-native';

export enum SocialMediaType {
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
