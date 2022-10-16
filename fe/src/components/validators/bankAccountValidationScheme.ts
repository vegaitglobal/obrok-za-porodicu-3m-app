import * as Yup from "yup";

export const bankAccountValidationScheme = Yup.object({
    receiverName: Yup.string()
        .required("Naziv primaoca je obavezno polje"),
    receiverCity: Yup.string()
        .required("Grad primaoca je obavezno polje!"),
    receiverAddress: Yup.string()
        .required("Adresa primaoca je obavezno polje!"),
    accountNumber: Yup.string()
        .required("Broj računa je obavezno polje!"),
    phoneNumber: Yup.string()
        .required("Broj telefona je obavezno polje!"),
});
