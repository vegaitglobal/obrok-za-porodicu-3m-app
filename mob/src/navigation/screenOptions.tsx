import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import OPTabIcon from '../components/atoms/OPTabIcon/OPTabIcon';
import OPHeaderSimple from '../components/molecules/OPHeaderSimple/OPHeaderSimple';
import OPHeader from '../components/organisms/OPHeader/OPHeader';
import i18n from '../translations/i18n';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    paddingHorizontal: 20,
  },
});

export const contactScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  tabBarShowLabel: false,
  tabBarIcon: ({focused}) => {
    return (
      <OPTabIcon
        text={i18n.t('tabNavigator.contact')}
        focused={focused}
        type={'contact'}
      />
    );
  },
  header: () => <OPHeaderSimple />,
};

export const aboutUseScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  tabBarShowLabel: false,
  tabBarIcon: ({focused}) => {
    return (
      <OPTabIcon
        text={i18n.t('tabNavigator.about_us')}
        focused={focused}
        type={'about_us'}
      />
    );
  },
  header: () => <OPHeaderSimple />,
};

export const donateScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  tabBarShowLabel: false,
  header: () => <OPHeaderSimple />,
  tabBarIcon: ({focused}) => {
    return (
      <OPTabIcon
        text={i18n.t('tabNavigator.donate')}
        focused={!focused}
        type={'donate'}
      />
    );
  },
};

export const newsStackScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({focused}) => {
    return (
      <OPTabIcon
        text={i18n.t('tabNavigator.news')}
        focused={focused}
        type={'news'}
      />
    );
  },
};

export const actionsScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({focused}) => {
    return (
      <OPTabIcon
        text={i18n.t('tabNavigator.home')}
        focused={focused}
        type={'home'}
      />
    );
  },
};

export const defaultTabBarSreenOptions = {
  header: () => <OPHeader />,
  title: '',
  tabBarStyle: styles.container,
};

export const newsStackOptions: StackNavigationOptions = {
  header: () => <OPHeader />,
  headerShown: true,
};

export const newsScreenOptions: StackNavigationOptions = {
  header: () => <OPHeaderSimple />,
};

export const actionsStackOptions: StackNavigationOptions = {
  headerShown: false,
};

export const actionScreenOptions: StackNavigationOptions = {
  headerShown: true,
  header: () => <OPHeaderSimple />,
};
