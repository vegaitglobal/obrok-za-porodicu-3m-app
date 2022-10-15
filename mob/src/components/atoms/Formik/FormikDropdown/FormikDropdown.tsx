import {FormikContext} from 'formik';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../../../constants/Colors';
import Icons from '../../../../constants/Icons';
import {FormikField, FormikForm} from '../../../../models/Formik';

import {styles} from './style';

export interface DropdownItem {
  label: string;
  value: string;
}

interface FormikDropdownProps {
  field: FormikField;
  form: FormikForm;
  label: string;
  editable: boolean;
  placeholder?: object;
  mandatory?: boolean;
  dropdownValues: Array<DropdownItem>;
  onRightIconPress?: (value: any) => void;
  submitOnChange?: boolean;
}

const FormikDropdown: React.FC<FormikDropdownProps> = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    label,
    editable,
    mandatory,
    dropdownValues,
    placeholder,
    onRightIconPress,
    submitOnChange = false,
  } = props;
  const [focused, setFocused] = useState(false);

  const error = errors[name] && touched[name];
  const inputFieldFillColor = 'transparent';
  const [selectedValue, setSelectedValue] = useState(value);

  const textStyle = useMemo(() => {
    if (focused) {
      return styles.focusedText;
    } else {
      return styles.text;
    }
  }, [focused]);

  const borderColor = error
    ? Colors.RED_ERROR
    : focused
    ? Colors.ORANGE
    : Colors.BG_LIGHT_GRAY;

  const formik = useContext(FormikContext);

  const changeHandler = (val: string) => {
    onChange(name)(val.toString());
    submitOnChange && formik.handleSubmit();
  };

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleOnRightIconPress = () => {
    onRightIconPress && onRightIconPress(selectedValue);
  };

  const renderIcon = useCallback(() => {
    if (focused) {
      return Icons.ARROW_UP;
    } else {
      return Icons.ARROW_DOWN;
    }
  }, [focused]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`${label}${mandatory ? '*' : ''}`}</Text>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: borderColor,
            backgroundColor: inputFieldFillColor,
          },
        ]}>
        <RNPickerSelect
          placeholder={placeholder ? placeholder : {}}
          pickerProps={{
            onBlur: () => {
              setFieldTouched(name);
              setFocused(false);
              onBlur(name);
            },
            onFocus: () => {
              setFocused(true);
            },
          }}
          useNativeAndroidPickerStyle={false}
          onOpen={() => {
            setFocused(true);
          }}
          onClose={() => {
            setFocused(false);
          }}
          touchableWrapperProps={{
            hitSlop: {top: 40, bottom: 40, left: 40, right: 40},
          }}
          style={{
            inputIOS: textStyle,
            inputAndroid: {
              ...textStyle,
              alignSelf: 'center',
              backgroundColor: 'red',
              justifyContent: 'flex-start',
              height: 50,
              textAlign: 'left',
              width: 327,
              lineHeight: 20,
              marginLeft: 20,
              marginTop: 5,
              marginBottom: 8,
            },
            inputAndroidContainer: {
              justifyContent: 'center',
              alignItems: 'flex-start',
            },
            inputIOSContainer: {
              width: 343,
              borderRadius: 4,
              backgroundColor: 'transparent',
            },
            viewContainer: {
              backgroundColor: 'transparent',
              justifyContent: 'center',
            },
          }}
          fixAndroidTouchableBug
          disabled={!editable}
          onValueChange={(val, _) => changeHandler(val)}
          items={dropdownValues}
          value={selectedValue}
        />

        <TouchableOpacity
          disabled={!onRightIconPress}
          style={styles.rightIcon}
          onPress={handleOnRightIconPress}>
          {renderIcon()}
        </TouchableOpacity>
      </View>
      {error ? (
        <Text style={styles.errorMessage}>{errors[name]}</Text>
      ) : (
        <View style={styles.errorContainer} />
      )}
    </View>
  );
};

export default FormikDropdown;
