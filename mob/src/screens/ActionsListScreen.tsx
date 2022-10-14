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

const ActionsListScreen = () => {
  const initialValues = {
    comment: '',
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
                // mandatory
                editable
                name={'comment'}
                label={'Ime i Prezime'}
                placeholder={'Ime i Prezime'}
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
