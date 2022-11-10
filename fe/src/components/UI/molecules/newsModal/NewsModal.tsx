import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { VolunteerActionDTOModel } from "../../../../models/VolunteerActionModel";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import CustomModal from "../../molecules/customModal/CustomModal";
import styles from "./NewsModal.module.scss";
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import { NewsModel } from "../../../../models/NewsModel";
import { newsValidationScheme } from "../../../validators/newsValidationScheme";
import { DefaultEditor } from 'react-simple-wysiwyg';

interface NewsModalProps {
  onClick: (title: string, shortDescription: string, description: string, imageURL: string) => void;
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
  const [html, setHtml] = useState("");

  const onChange = (e:any) => {
    setHtml(e.target.value);
  }

  useEffect(() => {
    if(item?.description) setHtml(item?.description)
    else setHtml("")
  }, [item])
  
  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={newsValidationScheme}
          onSubmit={(values: VolunteerActionDTOModel) => {
            onClick(values.title, values.shortDescription, html || "", values.imageURL);
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
                <div className={styles["input-label"]}>Opis</div>

                <div className={styles.divFlex} style={{paddingBottom: "20px", fontWeight: "normal", fontFamily: "Dosis"}}>
                  <DefaultEditor value={html ? html : ''} onChange={onChange} />
                </div>
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
