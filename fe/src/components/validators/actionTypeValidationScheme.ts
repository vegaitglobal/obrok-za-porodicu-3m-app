import * as Yup from "yup";

export const actionTypeValidationScheme = Yup.object({
  name: Yup.string()
    .required("*Required"),
});
