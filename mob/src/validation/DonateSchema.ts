import * as yup from 'yup';

export const baseDonateSchema = yup.object().shape({
  fullName: yup.string().required('Required'),
  email: yup.string().email('Email must be a valid email').required('Required'),
  phoneNumber: yup.string().required('Required'),
});

export const companyDonateSchema = yup.object().shape({
  companyName: yup.string().required('Required'),
});

export const individualDonateSchema = yup.object().shape({
  address: yup.string(),
  description: yup.string(),
});

export const otherDonationDonateSchema = yup.object().shape({
  description: yup.string().required('Required'),
});

export const companyPickupDonateSchema = yup.object().shape({
  address: yup.string().required('Required'),
});
