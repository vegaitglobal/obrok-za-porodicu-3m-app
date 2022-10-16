import React, {useMemo, useState} from 'react';
import {KeyboardType, Text, TextInput, View} from 'react-native';

import {styles} from './style';

import {Colors} from '../../../../constants/Colors';
import {FormikField, FormikForm} from '../../../../models/Formik';
import Icons from '../../../../constants/Icons';

interface FormikTextInputProps {
  field: FormikField;
  form: FormikForm;
  label: string;
  keyboardType?: KeyboardType;
  editable: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  mandatory?: boolean;
  textArea?: boolean;
}

const FormikTextInput: React.FC<FormikTextInputProps> = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    label,
    keyboardType,
    editable,
    placeholder,
    secureTextEntry,
    textArea,
    mandatory,
  } = props;

  const [focused, setFocused] = useState(false);
  const error = errors[name] && touched[name];

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

  const handleOnFocus = () => {
    setFocused(true);
  };

  const inputFieldFillColor = 'transparent';

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>{`${label}${mandatory ? '*' : ''}`}</Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: borderColor,
            backgroundColor: inputFieldFillColor,
          },
          textArea && styles.textArea,
        ]}>
        <TextInput
          numberOfLines={textArea ? 6 : 1}
          multiline={textArea ? true : false}
          placeholder={placeholder}
          value={value as string}
          placeholderTextColor={Colors.LIGHTER_GRAY}
          editable={editable}
          keyboardType={keyboardType}
          autoCorrect={false}
          returnKeyType={'done'}
          autoCapitalize="none"
          style={[styles.inputField, textStyle, textArea && styles.textArea]}
          secureTextEntry={secureTextEntry}
          onChangeText={text => onChange(name)(text)}
          onFocus={handleOnFocus}
          onBlur={() => {
            setFocused(false);
            setFieldTouched(name);
            onBlur(name);
          }}
          underlineColorAndroid="transparent"
        />

        {error && Icons.RED_WARNING}
      </View>
      {error ? (
        <Text style={styles.errorMessage}>{errors[name]}</Text>
      ) : (
        <View style={styles.errorContainer} />
      )}
    </View>
  );
};

export default FormikTextInput;
