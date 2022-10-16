import {Field, Formik} from 'formik';
import React from 'react';
import CustomModal from '../../molecules/customModal/CustomModal';
import {actionTypeValidationScheme} from '../../../validators/actionTypeValidationScheme';
import styles from './ActionTypeModal.module.scss';
import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import OPPrimaryInput from '../../atoms/primaryInput/OPPrimaryInput';
import {VolunteerActionTypeRequest} from '../../../../models/VolunteerActionTypeRequest';
import OPPrimaryButton from '../../atoms/primaryButton/OPPrimaryButton';
import {VolunteerActionTypeModel} from '../../../../models/VolunteerActionTypeModel';
import OPCheckbox from '../../atoms/checkbox/OPCheckbox';

interface ActionTypeModalProps {
  onClick: (name: string, hasPickup: boolean, hasPayment: boolean, id?: number) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  item?: VolunteerActionTypeModel;
}

const initialValues: VolunteerActionTypeRequest = {
    name: '',
    hasPickup: false,
    hasPayment: false
  };

export const ActionTypeModal: React.FC<ActionTypeModalProps> = ({
  onClick,
  onHide,
  show = false,
  item,
  label
}) => {
  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={item ? item : initialValues}
          validationSchema={actionTypeValidationScheme}
          onSubmit={(values: VolunteerActionTypeRequest) => {
            item ? onClick(values.name, values.hasPickup, values.hasPayment, item.id)
                : onClick(values.name, values.hasPickup, values.hasPayment);
          }}>
          {formik => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Name"
                  component={OPPrimaryInput}
                  placeholder="Enter Name"
                  name="name"
                  type="text"
                  value={item ? item.name : initialValues.name}
                />
                <div style={{display: "flex", justifyContent:"space-between", width: "50%", margin: "0 auto"}}>
                  <OPCheckbox name="hasPickup" label="Has pickup" />
                  <OPCheckbox name="hasPayment" label="Has payment" />
                </div>
              </div>
              <div className={globalClasses["modal-footer-ctas"]}>
                <OPPrimaryButton
                  onClick={() => formik.handleSubmit()}
                  text={label}
                  type="submit"
                  style={styles.btn}></OPPrimaryButton>
              </div>
            </>
          )}
        </Formik>
      </div>
    </CustomModal>
  );
};

export default ActionTypeModal;
