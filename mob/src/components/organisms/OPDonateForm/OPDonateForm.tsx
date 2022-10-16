/* eslint-disable @typescript-eslint/no-unused-vars */
import {Field, Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
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
                    <Text style={styles.errorMessage}>
                      {t('donateScreen.required')}
                    </Text>
                  )}
                </>
              )}

              <OPRadioButtonsRow
                leftText={t('donateScreen.company')}
                rightText={t('donateScreen.individual')}
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
                  label={t('donateScreen.companyName')}
                />
              )}
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'fullName'}
                label={t('donateScreen.fullName')}
              />
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'email'}
                label={t('donateScreen.email')}
              />
              <Field
                validateOnChange
                component={FormikTextInput}
                loseFocus={loseFocus}
                editable
                name={'phoneNumber'}
                label={t('donateScreen.phoneNumber')}
              />
              {selectedActionType === 5 && (
                <Field
                  validateOnChange
                  component={FormikTextInput}
                  loseFocus={loseFocus}
                  editable
                  name={'description'}
                  label={t('donateScreen.description')}
                />
              )}
              {isCompanySelected ? (
                <>
                  <OPRadioButtonsRow
                    leftText={t('donateScreen.pickup')}
                    rightText={t('donateScreen.delivery')}
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
                      label={t('donateScreen.address')}
                    />
                  ) : (
                    <View style={styles.locationContainer}>
                      <Text style={styles.locationTitle}>
                        {t('donateScreen.location')}
                      </Text>
                      <Text style={styles.locationBody}>
                        {bankAccount.receiverCity}
                      </Text>
                      <Text style={styles.locationBody}>
                        {bankAccount.receiverAddress}
                      </Text>
                      <Text style={styles.locationBody}>
                        {t('donateScreen.phoneNo')}:{' '}
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
                  <Text style={styles.locationTitle}>
                    {t('donateScreen.paymentDetails')}
                  </Text>
                  <Text style={styles.subtitle}>
                    {t('donateScreen.receiver')}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.receiverName}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.receiverCity}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.receiverAddress}
                  </Text>
                  <Text style={styles.subtitle}>
                    {t('donateScreen.accountNo')}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {bankAccount.accountNumber}
                  </Text>

                  <Text style={styles.subtitle}>
                    {t('donateScreen.modelRefNo')}
                  </Text>
                  <Text style={styles.paymentDataBody}>
                    {`${bankAccount.transactionModel} | ${bankAccount.referenceNumber}`}
                  </Text>
                </View>
              )}
              <OPPrimaryButton
                text={t('donateScreen.submit')}
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
