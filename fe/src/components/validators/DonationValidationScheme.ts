import * as Yup from "yup";

export const donationValidationScheme = Yup.object({
  email: Yup.string()
    .email("Email is not in valid format!"),
});
