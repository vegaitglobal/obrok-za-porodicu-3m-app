import * as yup from 'yup';

export const subscriptionSchema = yup.object().shape({
  email: yup.string().email().required('Polje je obavezno'),
});
