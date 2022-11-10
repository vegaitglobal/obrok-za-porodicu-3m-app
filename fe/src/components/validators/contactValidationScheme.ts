import * as Yup from "yup";

export const contactValidationScheme = Yup.object({
  title: Yup.string()
    .required("*Required")
});
