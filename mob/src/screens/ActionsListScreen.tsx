import React, {useState} from 'react';

import {Field, Formik} from 'formik';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FormikTextInput from '../components/atoms/Formik/FormikTextInput/FormikTextInput';
import {testSchema} from '../validation/TestSchema';
import FormikDropdown from '../components/atoms/Formik/FormikDropdown/FormikDropdown';

const ActionsListScreen = () => {
  const initialValues = {
    comment: '',
    nesto: '',
  };
  const handleOnDeclinePress = (comment: string) => {
    console.log(comment);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loseFocus, setLoseFocus] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <Formik
          validationSchema={testSchema}
          initialValues={initialValues}
          enableReinitialize
          onSubmit={values => {
            handleOnDeclinePress(values.comment);
          }}>
          {({}) => (
            <View style={styles.container}>
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'comment'}
                label={'Ime i Prezime'}
                placeholder={'Ime i Prezime'}
              />
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'nesto'}
                textArea
                label={'Ime i Prezime'}
                placeholder={'Ime i Prezime'}
              />
              <Field
                validateOnChange
                component={FormikDropdown}
                loseFocus={loseFocus}
                editable
                submitOnChange={true}
                dropdownValues={[
                  {label: 'sss', value: 2},
                  {label: 'ddad', value: 33},
                ]}
                name={'selectedCreator'}
                label={'Select Creator'}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  formik: {
    flex: 1,
  },
});

export default ActionsListScreen;
