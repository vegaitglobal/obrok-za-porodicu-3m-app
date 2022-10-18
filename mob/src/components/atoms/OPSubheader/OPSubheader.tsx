import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../OPSubheader/style';
import DropDownPicker from 'react-native-dropdown-picker';
import {Shadow} from 'react-native-shadow-2';
import {RootState} from '../../../store/reducers/RootReducer';
import {useSelector} from 'react-redux';
import {useAppThunkDispatch} from '../../../store/Store';
import {
  getVolunteerActionStatuses,
  onSetCurrentActionStatus,
  getVolunteerActions,
} from '../../../store/actions/VolunteerAction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '../../../constants/Icons';
import {useTranslation} from 'react-i18next';
import {Colors} from '../../../constants/Colors';

interface OPSubheaderProps {
  heading: string;
  showDropdown?: boolean;
  showBackButton?: boolean;
  onSelectionChanged?: (id: number) => void;
  onBackPressed?: () => void;
}

interface OptionModel {
  label: string;
  value: number;
}

const OPSubheader: React.FC<OPSubheaderProps> = ({
  heading,
  showDropdown = true,
  showBackButton = false,
  onSelectionChanged,
  onBackPressed,
}) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [allItems, setItems] = useState<Array<OptionModel>>([]);
  const {volunteerActionStatuses, currentActionStatus} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getVolunteerActionStatuses());
  }, [dispatch]);

  useEffect(() => {
    const beItems: Array<OptionModel> = volunteerActionStatuses.map(e => {
      return {label: e.name, value: e.id};
    });
    setItems([{label: t('actionsList.favourites'), value: 0}, ...beItems]);
  }, [t, volunteerActionStatuses]);

  return (
    <Shadow offset={[0, 2]} distance={2} stretch style={styles.shadowStyle}>
      <View style={styles.container}>
        <View style={styles.row}>
          {showBackButton ? (
            <TouchableOpacity style={styles.row} onPress={onBackPressed}>
              {Icons.ARROW_LEFT}
              <Text style={[styles.heading]}>{heading.toUpperCase()}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.heading, styles.headingMargin]}>
              {heading.toUpperCase()}
            </Text>
          )}
        </View>

        {showDropdown && (
          <DropDownPicker
            zIndexInverse={7000}
            zIndex={1000}
            placeholder={t('general.byStatus')}
            placeholderStyle={styles.placeholderStyle}
            open={open}
            value={currentActionStatus === null ? -1 : currentActionStatus}
            items={allItems}
            setOpen={setOpen}
            setValue={selection => {
              const newValue = selection(currentActionStatus);

              if (newValue === currentActionStatus) {
                dispatch(onSetCurrentActionStatus(null));
                onSelectionChanged && onSelectionChanged(-1);
              } else {
                dispatch(onSetCurrentActionStatus(newValue));
                onSelectionChanged && onSelectionChanged(newValue);
              }
              dispatch(getVolunteerActions(1));
            }}
            setItems={setItems}
            style={styles.picker}
            containerStyle={styles.picker}
            itemSeparator
            itemSeparatorStyle={styles.separator}
            dropDownContainerStyle={[
              styles.picker,
              styles.pickerDropdown,
              {transform: [{translateX: -10}, {translateY: 10}]},
            ]}
            textStyle={styles.dropdownLabels}
            labelStyle={[styles.dropdownLabels, styles.dropdownMainLabel]}
          />
        )}
      </View>
    </Shadow>
  );
};

export default OPSubheader;
