import React from 'react';
import {Platform, StyleSheet} from 'react-native';

import {Colors} from './Colors';

import ArrowDown from '../../assets/icons/arrow_down.svg';
import ArrowLeft from '../../assets/icons/arrow_left.svg';
import ArrowUp from '../../assets/icons/arrow_up.svg';
import ArrowRight from '../../assets/icons/arrow_right.svg';

import CallFull from '../../assets/icons/call_full.svg';
import Call from '../../assets/icons/call.svg';
import Contact from '../../assets/icons/contact.svg';
import Donate from '../../assets/icons/donate.svg';
import DonateWhite from '../../assets/icons/donate_white.svg';
import FileFull from '../../assets/icons/file_full.svg';
import File from '../../assets/icons/file.svg';
import Filter from '../../assets/icons/filter.svg';
import HomeFull from '../../assets/icons/home_full.svg';
import Home from '../../assets/icons/home.svg';
import NotificationFull from '../../assets/icons/notification_full.svg';
import Notification from '../../assets/icons/notification.svg';
import Play from '../../assets/icons/play.svg';
import Search from '../../assets/icons/search.svg';
import Share from '../../assets/icons/share.svg';
import StarFull from '../../assets/icons/star_full.svg';
import StarEmpty from '../../assets/icons/star_empty.svg';
import UserFull from '../../assets/icons/user_full.svg';
import User from '../../assets/icons/user.svg';
import Warning from '../../assets/icons/warning.svg';
import CheckSolid from '../../assets/icons/check_solid.svg';

const styles = StyleSheet.create({
  search: {marginTop: Platform.OS === 'android' ? 8 : 0},
});

export default {
  ARROW_DOWN: <ArrowDown />,
  ARROW_LEFT: <ArrowLeft />,
  ARROW_UP: <ArrowUp />,
  ARROW_RIGHT: <ArrowRight />,
  CALL: <Call />,
  CALL_FULL: <CallFull />,
  CONTACT: <Contact />,
  DONATE: <Donate />,
  DONATE_WHITE: <DonateWhite />,
  FILE: <File />,
  FILE_FULL: <FileFull />,
  FILTER: <Filter />,
  HOME_FULL: <HomeFull />,
  HOME: <Home />,
  NOTIFICATION_FULL: <NotificationFull />,
  NOTIFICATION: <Notification />,
  PLAY: <Play />,
  SEARCH: <Search color={Colors.DARK_GRAY} />,
  LIGHTER_GRAY_SEARCH: (
    <Search color={Colors.LIGHTER_GRAY} style={styles.search} />
  ),
  SHARE: <Share />,
  STAR_FULL: <StarFull />,
  STAR_EMPTY: <StarEmpty />,
  USER_FULL: <UserFull />,
  USER: <User />,
  WARNING: <Warning color={Colors.LIGHT_GRAY} />,
  RED_WARNING: <Warning color={Colors.RED_ERROR} />,
  CHECK_SOLID: <CheckSolid color={Colors.RED} width={20} height={20} />,
};
