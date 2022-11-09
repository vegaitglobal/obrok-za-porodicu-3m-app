import { Field, Formik } from "formik";
import React from "react";
import CustomModal from "../../molecules/customModal/CustomModal";
import { subscribersValidationScheme } from "../../../validators/subscribersValidationScheme";
import styles from "./SubscribersModal.module.scss";
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import { SubscribersModel } from "../../../../models/SubscribersModel";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";

interface SubscribersModalProps {
  onClick: (
    email: string,
  ) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  item?: SubscribersModel;
}

const initialValues: any = {
  email: "",
};

export const SubscribersModal: React.FC<SubscribersModalProps> = ({
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
          validationSchema={subscribersValidationScheme}
          onSubmit={(values: SubscribersModel) => {
            onClick(values.email);
          }}
        >
          {(formik) => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Email *"
                  component={OPPrimaryInput}
                  placeholder="Unesi email adresu"
                  name="email"
                  type="text"
                  value={item ? item.email : initialValues.email}
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

export default SubscribersModal;
