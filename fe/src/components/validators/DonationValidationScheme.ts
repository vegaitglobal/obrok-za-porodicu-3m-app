import * as Yup from "yup";

export const donationValidationScheme = Yup.object({
  fullName: Yup.string()
    .required("*Required"),
  email: Yup.string()
    .required("*Required")
    .email("Email is not in valid format!"),
  phoneNumber: Yup.string()
    .required("*Required"),
});
