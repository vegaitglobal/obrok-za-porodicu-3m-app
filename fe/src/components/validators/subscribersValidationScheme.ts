import * as Yup from "yup";

export const subscribersValidationScheme = Yup.object({
  email: Yup.string()
    .required("*Required")
    .email("Email is not in valid format!"),
});
