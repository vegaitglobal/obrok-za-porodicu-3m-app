import React, {FC, useState, useRef} from 'react';
import {View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icons from '../../../constants/Icons';
import OPBadge from '../../atoms/OPBadge/OPBadge';
import OPSearch from '../../atoms/OPSearch/OPSearch';
import OPTagChips from '../../molecules/OPTagChips/OPTagChips';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {useSelector} from 'react-redux';
import type {RootState} from '../../../store/reducers/RootReducer';

import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const volunteerActions: string | any[] = [
  {
    id: 1,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 2,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 3,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 4,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 5,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 6,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 7,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 8,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
];
interface OPHeaderProps {
  filterTitle?: string;
  buttonTitle?: string;
  searchPlaceholder?: string;
}

const LOGO_PATH = require('../../../../assets/images/LogoHoriz1.png');

const OPHeader: FC<OPHeaderProps> = ({
  filterTitle = 'Kategorije',
  buttonTitle = 'PRETRAZI',
  searchPlaceholder = 'Pretrazi po ključnim rečima',
}) => {
  const [data, setData] = useState([...volunteerActions]);
  const [searchValue, setSearchValue] = useState<string>('');
  const filters = useSelector(
    (state: RootState) => state.volunteerActions.appliedVolunteerActions,
  );
  const badgeValue: number =
    Object.keys(filters).length + +(searchValue?.length > 0 ? 1 : 0);

  const isOpening: any = useRef<any>(false);

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  const onPressFilterIcon = () => {
    if (!isOpening.current) {
      isOpening.current = true;
      height.value = withTiming(height.value === 0 ? data?.length * 40 : 0, {
        duration: 500,
      });
      opacity.value = withTiming(opacity.value === 1 ? 0 : 1, {
        duration: 500,
      });

      const timeout = setTimeout(() => {
        isOpening.current = false;
        clearTimeout(timeout);
      }, 700);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Image source={LOGO_PATH} resizeMode="contain" />
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={onPressFilterIcon}>
          <View>{Icons.FILTER}</View>
          <Text style={styles.filterText}>Filter</Text>
          {badgeValue ? <OPBadge value={badgeValue} /> : null}
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.animationWrapper, animatedStyles]}>
        <View style={styles.bottomHeader}>
          <OPSearch
            placeholder={searchPlaceholder}
            value={searchValue}
            onChangeText={(value: string) => setSearchValue(value)}
          />
          <Text style={styles.categoryText}>{filterTitle}</Text>
          <OPTagChips statuses={data} />
        </View>
        <View style={styles.buttonContainer}>
          <OPPrimaryButton
            text={buttonTitle.toUpperCase()}
            onPress={() => {}}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default OPHeader;
