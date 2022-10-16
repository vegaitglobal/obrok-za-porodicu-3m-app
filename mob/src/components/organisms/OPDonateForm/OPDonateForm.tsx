/* eslint-disable @typescript-eslint/no-unused-vars */
import {Field, Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Linking,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RadioButtonType} from '../../../constants/RadioButtonType';
import {DonationModel} from '../../../models/DonationModel';
import {getBankAccount} from '../../../store/actions/BankAccountActions';
import {donate} from '../../../store/actions/DonateActions';
import {RootState} from '../../../store/reducers/RootReducer';
import {
  baseDonateSchema,
  companyDonateSchema,
  companyPickupDonateSchema,
  otherDonationDonateSchema,
} from '../../../validation/DonateSchema';
import FormikTextInput from '../../atoms/Formik/FormikTextInput/FormikTextInput';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import OPRadioButtonsRow from '../../molecules/OPRadioButtonsRow/OPRadioButtonsRow';
import OPDonateTypeSelector from '../OPDonateTypeSelector/OPDonateTypeSelector';
import {styles} from './style';

interface OPDonateFormProps {
  actionType?: number | undefined;
  volunteerActionId?: number | null;
  onScrollToTop?: () => void;
}

const OPDonateForm: React.FC<OPDonateFormProps> = ({
  actionType = undefined,
  volunteerActionId = null,
  onScrollToTop,
}) => {
  const [loseFocus, setLoseFocus] = useState(false);
  const [isCompanySelected, setIsCompanySelected] = useState(false);
  const [isPickupSelected, setIsPickupSelected] = useState(false);
  const [actionTypeValidationError, setActionTypeValidationError] =
    useState(false);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getBankAccount());
  }, [dispatch]);

  const {bankAccount} = useSelector((state: RootState) => state.bankAccount);

  const [selectedActionType, setSelectedActionType] = useState(
    actionType ? actionType : -1,
  );

  const initialValues: DonationModel = {
    email: '',
    fullName: '',
    description: '',
    phoneNumber: '',
    address: '',
    volunteerActionTypeId: -1,
    isCompany: false,
    isPickup: true,
    companyName: '',
  };

  const handleOnCompanySelect = (side: RadioButtonType) => {
    if (side === RadioButtonType.LEFT) {
      setIsCompanySelected(true);
    } else {
      setIsCompanySelected(false);
    }
  };

  const handleOnPickupSelect = (side: RadioButtonType) => {
    if (side === RadioButtonType.LEFT) {
      setIsPickupSelected(true);
    } else {
      setIsPickupSelected(false);
    }
  };
  const handleOnDonatePress = (donation: DonationModel) => {
    dispatch(donate(donation));
  };
  const handleOnPhoneNumberPress = () => {
    Linking.openURL(`tel:${bankAccount.phoneNumber}`);
  };

  const getValidationSchema = () => {
    let schema: any = baseDonateSchema;

    if (isCompanySelected) {
      schema = schema.concat(companyDonateSchema);
    }
    if (selectedActionType === 5) {
      schema = schema.concat(otherDonationDonateSchema);
    }
    if (isPickupSelected && isCompanySelected) {
      schema = schema.concat(companyPickupDonateSchema);
    }
    return schema;
  };

  const handleOnActionTypeSelect = (id: number) => {
    setSelectedActionType(id);
    setActionTypeValidationError(false);
  };

  return (
    <View style={styles.viewContainer}>
      <Formik
        validationSchema={getValidationSchema()}
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values, {resetForm}) => {
          const donation: DonationModel = {
            email: values.email,
            fullName: values.fullName,
            description: values.description,
            phoneNumber: values.phoneNumber,
            address: values.address,
            volunteerActionTypeId: selectedActionType,
            volunteerActionId: volunteerActionId,
            isCompany: isCompanySelected,
            isPickup: isPickupSelected,
            companyName: values.companyName,
          };
          if (selectedActionType === -1) {
            setActionTypeValidationError(true);
            onScrollToTop && onScrollToTop();
          } else {
            handleOnDonatePress(donation);
            resetForm();
            setSelectedActionType(-1);
          }
        }}>
        {({handleSubmit, isValid}) => (
          <TouchableWithoutFeedback
            style={styles.mainView}
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View style={styles.mainView}>
              {!actionType && (
                <>
                  <OPDonateTypeSelector
                    onSelect={handleOnActionTypeSelect}
                    hasError={actionTypeValidationError}
                  />
                  {actionTypeValidationError && (
                    <Text style={styles.errorMessage}>Required</Text>
                  )}
                </>
              )}

              <OPRadioButtonsRow
                leftText={'Kompanija'}
                rightText={'Fizičko Lice'}
                leftSelected={isCompanySelected}
                rightSelected={!isCompanySelected}
                onSelect={handleOnCompanySelect}
              />
              {isCompanySelected && (
                <Field
                  validateOnChange
                  component={FormikTextInput}
                  loseFocus={loseFocus}
                  editable
                  name={'companyName'}
                  label={'Naziv Kompanije/Organizacije'}
                />
              )}
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'fullName'}
                label={'Ime i Prezime'}
              />
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'email'}
                label={'Email'}
              />
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'phoneNumber'}
                label={'Broj telefona (Ex. 06573451664)'}
              />
              {selectedActionType === 5 && (
                <Field
                  validateOnChange
                  component={FormikTextInput}
                  loseFocus={loseFocus}
                  editable
                  name={'description'}
                  label={'Opis Proizvoda (Napomenuti rok za preuzimanje)'}
                />
              )}
              {isCompanySelected ? (
                <>
                  <OPRadioButtonsRow
                    leftText={'Preuzimanje'}
                    rightText={'Lično Dostavljanje'}
                    leftSelected={isPickupSelected}
                    rightSelected={!isPickupSelected}
                    onSelect={handleOnPickupSelect}
                  />
                  {isPickupSelected ? (
                    <Field
                      validateOnChange
                      component={FormikTextInput}
                      loseFocus={loseFocus}
                      editable
                      name={'address'}
                      label={'Lokacija Preuzimanja'}
                    />
                  ) : (
                    <View style={styles.locationContainer}>
                      <Text style={styles.locationTitle}>Lokacija</Text>
                      <Text style={styles.locationBody}>
                        {bankAccount.receiverCity}
                      </Text>
                      <Text style={styles.locationBody}>
                        {bankAccount.receiverAddress}
                      </Text>
                      <Text style={styles.locationBody}>
                        Br.Telefona:{' '}
                        <Text
                          onPress={handleOnPhoneNumberPress}
                          style={styles.phoneNumber}>
                          {bankAccount.phoneNumber}
                        </Text>
                      </Text>
                    </View>
                  )}
                </>
              ) : (
                <View style={styles.paymentDataContainer}>
                  <Text style={styles.locationTitle}>Podaci za uplatu</Text>
                  <Text style={styles.subtitle}>Primalac</Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.receiverName}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.receiverCity}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.receiverAddress}
                  </Text>
                  <Text style={styles.subtitle}>Žiro račun</Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.accountNumber}
                  </Text>

                  <Text style={styles.subtitle}>Model | Poziv na broj</Text>
                  <Text style={styles.paymentDataBody}>
                    {`${bankAccount.transactionModel} | ${bankAccount.referenceNumber}`}
                  </Text>
                </View>
              )}
              <OPPrimaryButton
                text={'UGOVORI DONACIJU'}
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.button}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </View>
  );
};

export default OPDonateForm;
