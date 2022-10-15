export interface FormikField {
  name: string;
  onBlur: (name: string) => void;
  onChange: (name: string) => any;
  value: string | number;
}

export interface FormikForm {
  errors: any;
  touched: any;
  setFieldTouched: (name: string) => void;
}
