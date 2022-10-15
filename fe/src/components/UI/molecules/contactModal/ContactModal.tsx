import {Field, Formik} from 'formik';
import React from 'react';
import CustomModal from '../../molecules/customModal/CustomModal';
import {contactValidationScheme} from '../../../validators/contactValidationScheme';
import styles from './ContactModal.module.scss';
import OPPrimaryInput from '../../atoms/primaryInput/OPPrimaryInput';
import {ContactRequest} from '../../../../models/ContactRequest';
import OPPrimaryButton from '../../atoms/primaryButton/OPPrimaryButton';

interface ContactModalProps {
  onClick: (title: string, email: string, phone: string) => void;
  onHide: () => void;
  show: boolean;
  label?: string;
}

const initialValues: ContactRequest = {
    title: '',
    email: '',
    phone: ''
  };

export const ContactModal: React.FC<ContactModalProps> = ({
  onClick,
  onHide,
  show = false,
}) => {
  return (
    <CustomModal show={show} onHide={onHide}>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={contactValidationScheme}
          onSubmit={(values: ContactRequest) => {
            onClick(values.title, values.email, values.phone);
          }}>
          {formik => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Title"
                  component={OPPrimaryInput}
                  placeholder="Enter title"
                  name="name"
                  type="text"
                  value=""
                />
                <Field
                  label="Email Address"
                  component={OPPrimaryInput}
                  placeholder="Enter your email"
                  name="email"
                  type="text"
                  value=""
                />
                <Field
                  label="Phone Number"
                  component={OPPrimaryInput}
                  placeholder="Enter your phone number"
                  name="phone"
                  type="text"
                  value=""
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

export default ContactModal;
