import { Field, Formik } from "formik";
import React from "react";
import CustomModal from "../../molecules/customModal/CustomModal";
import { contactValidationScheme } from "../../../validators/contactValidationScheme";
import styles from "./ContactModal.module.scss";
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import { ContactModel } from "../../../../models/ContactModel";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";

interface ContactModalProps {
  onClick: (
    title: string,
    email: string,
    phoneNumber: string,
  ) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  item?: ContactModel;
}

const initialValues: any = {
  title: "",
  email: "",
  phoneNumber: "",
};

export const ContactModal: React.FC<ContactModalProps> = ({
  onClick,
  onHide,
  show = false,
  item,
  label,
}) => {
  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={contactValidationScheme}
          onSubmit={(values: ContactModel) => {
            onClick(values.title, values.email, values.phoneNumber);
          }}
        >
          {(formik) => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Kontakt *"
                  component={OPPrimaryInput}
                  placeholder="Unesi kontakt"
                  name="title"
                  type="text"
                  value={item ? item.title : initialValues.title}
                />
                <Field
                  label="Email"
                  component={OPPrimaryInput}
                  placeholder="Unesi email adresu"
                  name="email"
                  type="text"
                  value={item ? item.email : initialValues.email}
                />
                <Field
                  label="Broj telefona"
                  component={OPPrimaryInput}
                  placeholder="Unesi broj telefona"
                  name="phoneNumber"
                  type="text"
                  value={item ? item.phoneNumber : initialValues.phoneNumber}
                />
              </div>
              <div className={globalClasses["modal-footer-ctas"]}>
                <OPPrimaryButton
                  onClick={() => formik.handleSubmit()}
                  text={label}
                  type="submit"
                  style={styles.btn}
                ></OPPrimaryButton>
              </div>
            </>
          )}
        </Formik>
      </div>
    </CustomModal>
  );
};

export default ContactModal;
