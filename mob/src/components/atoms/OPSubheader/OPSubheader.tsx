import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../OPSubheader/style';
import DropDownPicker from 'react-native-dropdown-picker';
import {Shadow} from 'react-native-shadow-2';

interface OPSubheaderProps {
  heading: string;
  items: OPSubheaderDropdownItem[];
  onSelectionChanged?: (item: any) => void;
}

interface OPSubheaderDropdownItem {
  label: string;
  value: number;
}

const OPSubheader: React.FC<OPSubheaderProps> = ({
  heading,
  items,
  onSelectionChanged,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [allItems, setItems] = useState([
    {label: 'Najnovije', value: 0},
    ...items,
  ]);

  return (
    <Shadow offset={[0, 2]} distance={2} stretch>
      <View style={styles.container}>
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
