import i18next from '../translations/i18n';
import * as yup from 'yup';

export const baseDonateSchema = yup.object().shape({
  fullName: yup.string().required(i18next.t('general.required')),
  email: yup
    .string()
    .email(i18next.t('general.emailMustBeValid'))
    .required(i18next.t('general.required')),
  phoneNumber: yup.string().required(i18next.t('general.required')),
});

export const companyDonateSchema = yup.object().shape({
  companyName: yup.string().required(i18next.t('general.required')),
});

export const individualDonateSchema = yup.object().shape({
  address: yup.string(),
  description: yup.string(),
});

export const otherDonationDonateSchema = yup.object().shape({
  description: yup.string().required(i18next.t('general.required')),
});

export const companyPickupDonateSchema = yup.object().shape({
});
