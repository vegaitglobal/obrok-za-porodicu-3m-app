import {Field, Formik} from 'formik';
import React from 'react';
import CustomModal from '../../molecules/customModal/CustomModal';
import {actionTypeValidationScheme} from '../../../validators/actionTypeValidationScheme';
import styles from './ActionTypeModal.module.scss';
import OPPrimaryInput from '../../atoms/primaryInput/OPPrimaryInput';
import {VolunteerActionTypeRequest} from '../../../../models/VolunteerActionTypeRequest';
import OPPrimaryButton from '../../atoms/primaryButton/OPPrimaryButton';

interface ActionTypeModalProps {
  onClick: (name: string, hasPickup: boolean, hasPayment: boolean) => void;
  onHide: () => void;
  show: boolean;
  label?: string;
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
}) => {
  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={actionTypeValidationScheme}
          onSubmit={(values: VolunteerActionTypeRequest) => {
            onClick(values.name, values.hasPickup, values.hasPayment);
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
                  value=""
                />
                <Field 
                  type="checkbox" 
                  name="hasPickup" 
                  label="Has Pickup"
                />
                <Field 
                  type="checkbox" 
                  name="hasPayment" 
                  label="Has Payment"
                />
              </div>
              <div>
                <OPPrimaryButton
                  onClick={() => formik.handleSubmit()}
                  text={'ADD ACTION TYPE'}
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
