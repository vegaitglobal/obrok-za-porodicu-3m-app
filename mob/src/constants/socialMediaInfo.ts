import {SocialMedia, SocialMediaType} from '../models/SocialMedia';

const facebook = require('../../assets/images/facebook/facebook.png');
const youtube = require('../../assets/images/youtube/youtube.png');
const instagram = require('../../assets/images/instagram/instagram.png');
export const messenger = require('../../assets/images/messenger/messenger.png');

export const socialMedia: SocialMedia[] = [
  {
    name: 'OBROK ZA PORODICU',
    thumbnail: facebook,
    link: 'https://www.facebook.com/OBROKzaporodicu3M',
    type: SocialMediaType.FACEBOOK,
    id: 'OBROKzaporodicu3M',
    buttonLabel: 'Go to Page',
    buttonBGColor: '#E1F1FF',
    buttonTextcolor: '#0070EA',
  },
  {
    name: 'OBROK ZA PORODICU',
    thumbnail: instagram,
    link: 'https://www.instagram.com/obrok_za_porodicu_3m/',
    type: SocialMediaType.INSTAGRAM,
    id: 'obrok_za_porodicu_3m',
    buttonLabel: 'Visit Profile',
    buttonBGColor: '#FFE1FA',
    buttonTextcolor: '#EA00B7',
  },
  {
    name: 'OBROK ZA PORODICU',
    thumbnail: youtube,
    link: 'https://www.youtube.com/channel/UC8A4-CyJ8wl-PT9RaC4B6fQ',
    type: SocialMediaType.YOUTUBE,
    id: 'UC8A4-CyJ8wl-PT9RaC4B6fQ',
    buttonLabel: 'Visit Profile',
    buttonBGColor: '#FFCCCB',
    buttonTextcolor: '#FF0000',
  },
];
