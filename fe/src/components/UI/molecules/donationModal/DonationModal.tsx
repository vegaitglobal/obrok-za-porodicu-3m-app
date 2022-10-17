import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { DonationDTOModel } from "../../../../models/DonationModel";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";
import CustomModal from "../../molecules/customModal/CustomModal";
import styles from "./DonationModal.module.scss";
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import OPCheckbox from "../../atoms/checkbox/OPCheckbox";
import { donationValidationScheme } from "../../../validators/DonationValidationScheme";
import { VolunteerActionModel } from "../../../../models/VolunteerActionModel";

interface DonationModalProps {
  onClick: (
    volunteerActionId: string,
    isCompany: boolean,
    companyName: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    description: string,
    isPickup: boolean,
    address: string,
    id?: number | null
  ) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  actions: VolunteerActionModel[];
  item?: DonationDTOModel;
}

const initialValues: any = {
  isCompany: false,
  companyName: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  description: "",
  isPickup: false,
  address: "",
};
type OptionType = {
  value: string;
  label: string;
};
export const DonationModal: React.FC<DonationModalProps> = ({
  onClick,
  onHide,
  show = false,
  item,
  actions,
  label,
}) => {
  const ActionsOptions: OptionType[] = actions.map(
    (b: VolunteerActionModel) => {
      return { value: b.id.toString()!, label: b.title! };
  );
  const [selectedAction, setSelectedAction] = useState(ActionsOptions[0]);

  useEffect(() => {
    setSelectedAction(
      item
        ? ActionsOptions.find(
            (a) => a.value === item.volunteerActionId.toString()
          ) ?? ActionsOptions[0]
        : ActionsOptions[0]
    );
  }, [show, item]);

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

  const handleOnActionChange = (e: any) => {
    setSelectedAction(
      ActionsOptions.find((a) => a.value === e.value) ?? ActionsOptions[0]
    );
  };

  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={donationValidationScheme}
          onSubmit={(values: DonationDTOModel) => {
            onClick(
              selectedAction.value,
              values.isCompany,
              values.companyName,
              values.fullName,
              values.email,
              values.phoneNumber,
              values.description,
              values.isPickup,
              values.address
            );
          }}
        >
          {(formik) => (
            <>
              <div className={styles.divFlex}>
                <div className={styles["input-label"]}>Akcija</div>
                <Select
                  styles={customStyles}
                  placeholder={
                    <div className={styles.placeholder}>Izaberi akciju...</div>
                  }
                  isSearchable={true}
                  className={styles.select}
                  options={ActionsOptions}
                  value={selectedAction}
                  onChange={handleOnActionChange}
                />
                <Field
                  label="Naziv preduzeća"
                  component={OPPrimaryInput}
                  placeholder="Unesi naziv preduzeća..."
                  name="companyName"
                  type="text"
                  value={item ? item.companyName : initialValues.companyName}
                />
                <Field
                  label="Ime i prezime"
                  component={OPPrimaryInput}
                  placeholder="Unesi ime i prezime..."
                  name="fullName"
                  type="text"
                  value={item ? item.fullName : initialValues.fullName}
                />
                <Field
                  label="Email"
                  component={OPPrimaryInput}
                  placeholder="Unesi email..."
                  name="email"
                  type="text"
                  value={item ? item.email : initialValues.email}
                />
                <Field
                  label="Broj telefona"
                  component={OPPrimaryInput}
                  placeholder="Unesi broj telefona..."
                  name="phoneNumber"
                  type="text"
                  value={item ? item.phoneNumber : initialValues.phoneNumber}
                />
                <Field
                  label="Opis"
                  component={OPPrimaryInput}
                  placeholder="Unesi opis..."
                  name="description"
                  type="text"
                  value={item ? item.description : initialValues.description}
                />
                <Field
                  label="Adresa"
                  component={OPPrimaryInput}
                  placeholder="Unesi adresu..."
                  name="address"
                  type="text"
                  value={item ? item.address : initialValues.address}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  margin: "0 auto",
                }}
              >
                <OPCheckbox name="isPickup" label="Preuzimanje" />
                <OPCheckbox name="isCompany" label="Preduzeće" />
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

export default DonationModal;
