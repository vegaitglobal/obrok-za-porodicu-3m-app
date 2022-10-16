import { Field, Formik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { VolunteerActionDTOModel } from "../../../../models/VolunteerActionModel";
import { VolunteerActionStatusModel } from "../../../../models/VolunteerActionStatusModel";
import { VolunteerActionTypeModel } from "../../../../models/VolunteerActionTypeModel";
import { volunteerActionValidationScheme } from "../../../validators/volunteerActionSchema";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import CustomModal from "../../molecules/customModal/CustomModal";
import styles from "./VolunteerActionModal.module.scss";

interface VolunteerActionModalProps {
  onClick: (
    title: string,
    shortDescription: string,
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
}

const initialValues: any = {
  title: "",
  shortDescription: "",
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
}) => {
  const StatusOptions: OptionType[] = actionStatuses.map(
    (b: VolunteerActionStatusModel) => {
      return { value: b.id.toString()!, label: b.name! };
    }
  );
  const TypesOptions: OptionType[] = actionTypes.map(
    (b: VolunteerActionTypeModel) => {
      return { value: b.id.toString()!, label: b.name! };
    }
  );
  const [selectedStatus, setSelectedStatus] = useState(StatusOptions[0]);
  const [selectedType, setSelectedType] = useState(TypesOptions[0]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "1px solid rgba(0, 0, 0, 0.08)",
      marginBottom: 10,
      "&:hover": {
        cursor: "pointer",
      },
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.6)",
    }),
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
            item
              ? onClick(
                  values.title,
                  values.shortDescription,
                  selectedStatus.value,
                  selectedType.value,
                  values.referenceNumber,
                  values.imageURL
                )
              : onClick(
                  values.title,
                  values.shortDescription,
                  selectedStatus.value,
                  selectedType.value,
                  values.referenceNumber,
                  values.imageURL
                );
          }}
        >
          {(formik) => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Title"
                  component={OPPrimaryInput}
                  placeholder="Enter Title"
                  name="title"
                  type="text"
                  value={item ? item.title : initialValues.title}
                />
                <Field
                  label="Short description"
                  component={OPPrimaryInput}
                  placeholder="Enter short description"
                  name="shortDescription"
                  type="text"
                  value={
                    item
                      ? item.shortDescription
                      : initialValues.shortDescription
                  }
                />
                <div className={styles["input-label"]}>Status</div>
                <Select
                  styles={customStyles}
                  placeholder={
                    <div className={styles.placeholder}>Select status...</div>
                  }
                  className={styles.select}
                  options={StatusOptions}
                  value={selectedStatus}
                  onChange={handleOnStatusChange}
                />
                <div className={styles["input-label"]}>Action Type</div>
                <Select
                  styles={customStyles}
                  placeholder={
                    <div className={styles.placeholder}>
                      Select action type...
                    </div>
                  }
                  className={styles.select}
                  options={TypesOptions}
                  value={selectedType}
                  onChange={handleOnTypeChange}
                />

                <Field
                  label="Reference number"
                  component={OPPrimaryInput}
                  placeholder="Enter reference number"
                  name="referenceNumber"
                  type="text"
                  value={
                    item ? item.referenceNumber : initialValues.referenceNumber
                  }
                />
                <Field
                  label="Image URL"
                  component={OPPrimaryInput}
                  placeholder="Enter image URL"
                  name="imageURL"
                  type="text"
                  value={item ? item.imageURL : initialValues.imageURL}
                />
              </div>
              <div>
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

export default VolunteerActionModal;
