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
    volunteerActionId: string | null,
    isCompany: boolean,
    companyName: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    description: string,
    isPickup: boolean,
    address: string,
  ) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  actions: VolunteerActionModel[];
  item?: DonationDTOModel;
}

const initialValues: any = {
  volunteerActionId: null,
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
  let allOptions = [{value: '-1', label: '/'}];

  allOptions = allOptions.concat(actions?.map((option) => ({
    value: option?.id.toString(), 
    label: option.title
  })));

  const [selectedAction, setSelectedAction] = useState<OptionType>({value: '-1', label: '/'});

  useEffect(() => {
    let action = allOptions?.find(option => option?.value == item?.volunteerActionId?.toString());
    if(action) setSelectedAction(action);
    else setSelectedAction(allOptions[0]);
  }, [item]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "1px solid rgba(0, 0, 0, 0.08)",
      marginBottom: 10,
      "&:hover": {
        cursor: "pointer",
      },
      fontFamily: "Dosis",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      fontFamily: "Dosis"
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: "Dosis"
    }),
    menu: (provided: any) => ({
      ...provided,
      fontFamily: "Dosis",
    })
  };

  const handleOnActionChange = (e: any) => {
    let action = allOptions?.find((action) => action?.value == e?.value);
    if(action) setSelectedAction(action);
  };

  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={donationValidationScheme}
          onSubmit={(values: DonationDTOModel) => {
            let selectedActionId = selectedAction?.value == '-1' ? null : selectedAction?.value;
            onClick(
              selectedActionId,
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
                    <div className={styles["placeholder"]}>Izaberi akciju...</div>
                  }
                  isSearchable={true}
                  className={styles.select}
                  options={allOptions}
                  value={selectedAction}
                  onChange={handleOnActionChange}
                />
                <div style={{margin: "20px 0 20px 10px"}}>
                  <OPCheckbox name="isCompany" label="Donacija kompanije" />
                </div>
                <Field
                  label="Naziv kompanije"
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
                <div style={{margin: "0 0 10px 10px"}}>
                  <OPCheckbox name="isPickup" label="Preuzimanje" />
                </div>
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