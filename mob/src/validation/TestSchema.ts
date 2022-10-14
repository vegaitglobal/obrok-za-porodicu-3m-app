import * as yup from 'yup';

export const testSchema = yup.object().shape({
  comment: yup.string().required('Required'),
});
