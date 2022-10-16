import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../OPSubheader/style';
import DropDownPicker from 'react-native-dropdown-picker';
import {Shadow} from 'react-native-shadow-2';
import {RootState} from '../../../store/reducers/RootReducer';
import {useSelector} from 'react-redux';
import {useAppThunkDispatch} from '../../../store/Store';
import {getVolunteerActionStatuses} from '../../../store/actions/VolunteerAction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '../../../constants/Icons';
import {useTranslation} from 'react-i18next';

interface OPSubheaderProps {
  heading: string;
  showDropdown?: boolean;
  showBackButton?: boolean;
  onSelectionChanged?: (item: any) => void;
  onBackPressed?: () => void;
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
  const [value, setValue] = useState(0);
  const [allItems, setItems] = useState([{label: '', value: 0}]);
  const {volunteerActionStatuses} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getVolunteerActionStatuses());
  }, [dispatch]);

  useEffect(() => {
    setItems(
      volunteerActionStatuses.map(e => {
        return {label: e.name, value: e.id};
      }),
    );
  }, [volunteerActionStatuses]);

  return (
    <Shadow offset={[0, 2]} distance={2} stretch>
      <View style={[styles.container]}>
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
            placeholderStyle={styles.placeholder}
            open={open}
            value={value}
            items={allItems}
            setOpen={setOpen}
            setValue={selection => {
              setValue(selection);
              onSelectionChanged && onSelectionChanged(selection);
            }}
            setItems={setItems}
            style={styles.picker}
            containerStyle={styles.picker}
            dropDownContainerStyle={[styles.picker, styles.pickerDropdown]}
            textStyle={styles.dropdownLabels}
            labelStyle={[styles.dropdownLabels, styles.dropdownMainLabel]}
          />
        )}
      </View>
    </Shadow>
  );
};

export default OPSubheader;
