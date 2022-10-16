import * as Yup from "yup";

export const volunteerActionValidationScheme = Yup.object({
  imageURL: Yup.string().required("*Required"),
  title: Yup.string().required("*Required"),
  shortDescription: Yup.string().required("*Required"),
  referenceNumber: Yup.string().required("*Required"),
});
