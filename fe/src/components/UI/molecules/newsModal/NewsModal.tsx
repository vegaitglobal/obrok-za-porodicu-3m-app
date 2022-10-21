import { Field, Formik } from "formik";
import React from "react";
import { VolunteerActionDTOModel } from "../../../../models/VolunteerActionModel";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import CustomModal from "../../molecules/customModal/CustomModal";
import styles from "./NewsModal.module.scss";
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import { NewsModel } from "../../../../models/NewsModel";
import { newsValidationScheme } from "../../../validators/newsValidationScheme";

interface NewsModalProps {
  onClick: (title: string, shortDescription: string, imageURL: string) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  item?: NewsModel;
  showDeleteModal: (id: number) => void;
}

const initialValues: any = {
  title: "",
  shortDescription: "",
  imageURL: "",
};
export const NewsModal: React.FC<NewsModalProps> = ({
  onClick,
  onHide,
  show = false,
  item,
  label,
  showDeleteModal,
}) => {
  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={newsValidationScheme}
          onSubmit={(values: VolunteerActionDTOModel) => {
            onClick(values.title, values.shortDescription, values.imageURL);
          }}
        >
          {(formik) => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Vest"
                  component={OPPrimaryInput}
                  placeholder="Unesi vest"
                  name="title"
                  type="text"
                  value={item ? item.title : initialValues.title}
                />
                <Field
                  label="Kratak opis"
                  component={OPPrimaryInput}
                  placeholder="Unesi kratak opis"
                  name="shortDescription"
                  type="text"
                  value={
                    item
                      ? item.shortDescription
                      : initialValues.shortDescription
                  }
                />
                <Field
                  label="URL adresa slike"
                  component={OPPrimaryInput}
                  placeholder="Unesi URL adresu slike"
                  name="imageURL"
                  type="text"
                  value={item ? item.imageURL : initialValues.imageURL}
                />
              </div>
              <div className={item ? globalClasses["modal-footer-ctas"] : {}}>
                <OPPrimaryButton
                  onClick={() => formik.handleSubmit()}
                  text={label}
                  type="submit"
                  style={styles.btn}
                ></OPPrimaryButton>
                {item ? (
                  <OPPrimaryButton
                    onClick={() => {
                      showDeleteModal(item.id ?? 0);
                    }}
                    text={"OBRIŠI"}
                    style={styles.btn}
                  ></OPPrimaryButton>
                ) : null}
              </div>
            </>
          )}
        </Formik>
      </div>
    </CustomModal>
  );
};

export default NewsModal;
