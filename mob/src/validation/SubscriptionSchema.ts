import i18next from '../translations/i18n';
import * as yup from 'yup';

export const subscriptionSchema = yup.object().shape({
  email: yup.string().email().required(i18next.t('general.required')),
});
