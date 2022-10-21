import * as Yup from "yup";

export const newsValidationScheme = Yup.object({
  title: Yup.string().required("*Required"),
  shortDescription: Yup.string().required("*Required"),
});
