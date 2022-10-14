import * as Yup from "yup";

export const loginValidationScheme = Yup.object({
  email: Yup.string()
    .email("Email is not in valid format!")
    .required("*Required"),
  password: Yup.string().required("*Required"),
});
