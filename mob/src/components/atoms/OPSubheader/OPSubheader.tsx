import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../OPSubheader/style';
import DropDownPicker from 'react-native-dropdown-picker';
import {Shadow} from 'react-native-shadow-2';
import {RootState} from '../../../store/reducers/RootReducer';
import {useSelector} from 'react-redux';
import {useAppThunkDispatch} from '../../../store/Store';
import {getVolunteerActionStatuses} from '../../../store/actions/VolunteerAction';

interface OPSubheaderProps {
  heading: string;
  onSelectionChanged?: (item: any) => void;
}

const OPSubheader: React.FC<OPSubheaderProps> = ({
  heading,
  onSelectionChanged,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [allItems, setItems] = useState([{label: 'Najnovije', value: 0}]);
  const {volunteerActionStatuses} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getVolunteerActionStatuses());
  }, [dispatch]);

  useEffect(() => {
    setItems([
      {label: 'Najnovije', value: 0},
      ...volunteerActionStatuses.map(e => {
        return {label: e.name, value: e.id};
      }),
    ]);
  }, [volunteerActionStatuses]);

  return (
    <Shadow offset={[0, 2]} distance={2} stretch>
      <View style={[styles.container]}>
        <Text style={styles.heading}>{heading.toUpperCase()}</Text>
        <DropDownPicker
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
      </View>
    </Shadow>
  );
};

export default OPSubheader;
