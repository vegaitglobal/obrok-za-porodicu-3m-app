import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { VolunteerActionDTOModel } from "../../../../models/VolunteerActionModel";
import { VolunteerActionStatusModel } from "../../../../models/VolunteerActionStatusModel";
import { VolunteerActionTypeModel } from "../../../../models/VolunteerActionTypeModel";
import { volunteerActionValidationScheme } from "../../../validators/volunteerActionSchema";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import CustomModal from "../../molecules/customModal/CustomModal";
import styles from "./VolunteerActionModal.module.scss";
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import { DefaultEditor } from 'react-simple-wysiwyg';

interface VolunteerActionModalProps {
  onClick: (
    title: string,
    shortDescription: string,
    description: string,
    statusId: string,
    typeId: string,
    referenceNumber: string,
    imageURL: string
  ) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  actionStatuses: VolunteerActionStatusModel[];
  actionTypes: VolunteerActionTypeModel[];
  item?: VolunteerActionDTOModel;
  showDeleteModal: (id: number) => void;
}

const initialValues: any = {
  title: "",
  shortDescription: "",
  description: "<p></p>",
  imageURL: "",
  referenceNumber: "",
};
type OptionType = {
  value: string;
  label: string;
};
export const VolunteerActionModal: React.FC<VolunteerActionModalProps> = ({
  onClick,
  onHide,
  show = false,
  item,
  actionStatuses,
  actionTypes,
  label,
  showDeleteModal,
}) => {
  const StatusOptions: OptionType[] = actionStatuses.map(
    (b: VolunteerActionStatusModel) => {
      return { value: b.id.toString()!, label: b.name! };
    }
  );
  const TypesOptions: OptionType[] = actionTypes.map(
    (b: VolunteerActionTypeModel) => {
      return { value: (b.id ?? 0).toString()!, label: b.name! };
    }
  );
  const [selectedStatus, setSelectedStatus] = useState(StatusOptions[0]);
  const [selectedType, setSelectedType] = useState(TypesOptions[0]);
  const [html, setHtml] = useState(item?.description);

  const onChange = (e:any) => {
    setHtml(e.target.value);
  }

  useEffect(() => {
    setHtml(item?.description);
  }, [item])


  useEffect(() => {
    setSelectedStatus(
      item
        ? StatusOptions.find((a) => a.value === item.statusId.toString()) ??
            StatusOptions[0]
        : StatusOptions[0]
    );
    setSelectedType(
      item
        ? TypesOptions.find((a) => a.value === item.typeId.toString()) ??
            TypesOptions[0]
        : TypesOptions[0]
    );
  }, [show, item]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "1px solid rgba(0, 0, 0, 0.08)",
      marginBottom: 20,
      "&:hover": {
        cursor: "pointer",
      },
      fontFamily: "Dosis",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      fontFamily: "Dosis",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: "Dosis",
    }),
    menu: (provided: any) => ({
      ...provided,
      fontFamily: "Dosis",
    })
  };

  const handleOnStatusChange = (e: any) => {
    setSelectedStatus(
      StatusOptions.find((a) => a.value === e.value) ?? StatusOptions[0]
    );
  };

  const handleOnTypeChange = (e: any) => {
    setSelectedType(
      TypesOptions.find((a) => a.value === e.value) ?? TypesOptions[0]
    );
  };

  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={volunteerActionValidationScheme}
          onSubmit={(values: VolunteerActionDTOModel) => {
            onClick(
              values.title,
              values.shortDescription,
              html || item?.description || "",
              selectedStatus.value,
              selectedType.value,
              values.referenceNumber,
              values.imageURL
            );
            setHtml("");
          }}
        >
          {(formik) => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Akcija"
                  component={OPPrimaryInput}
                  placeholder="Unesi akciju"
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
                  <DefaultEditor value={html ? html : initialValues.description} onChange={onChange} />
                </div>

                <div className={styles["input-label"]}>Tip akcije</div>
                <Select
                  styles={customStyles}
                  placeholder={
                    <div className={styles.placeholder}>
                      Izaberi tip akcije...
                    </div>
                  }
                  className={styles.select}
                  options={TypesOptions}
                  value={selectedType}
                  onChange={handleOnTypeChange}
                />
                <div className={styles["input-label"]}>Status</div>
                <Select
                  styles={customStyles}
                  placeholder={
                    <div className={styles.placeholder}>Izaberi stanje...</div>
                  }
                  className={styles.select}
                  options={StatusOptions}
                  value={selectedStatus}
                  onChange={handleOnStatusChange}
                />
                <Field
                  label="Poziv na broj"
                  component={OPPrimaryInput}
                  placeholder="Unesi poziv na broj..."
                  name="referenceNumber"
                  type="text"
                  value={
                    item ? item.referenceNumber : initialValues.referenceNumber
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

export default VolunteerActionModal;
