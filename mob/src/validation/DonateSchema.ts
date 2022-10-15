import * as yup from 'yup';

export const donateSchema = yup.object().shape({
  fullName: yup.string().required('Required'),
  email: yup.string().required('Required'),
  address: yup.string(),
  description: yup.string().required('Required'),
  phoneNumber: yup.string().required('Required'),
});
