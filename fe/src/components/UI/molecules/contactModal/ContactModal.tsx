import {Field, Formik} from 'formik';
import React from 'react';
import CustomModal from '../../molecules/customModal/CustomModal';
import {contactValidationScheme} from '../../../validators/contactValidationScheme';
import styles from './ContactModal.module.scss';
import OPPrimaryInput from '../../atoms/primaryInput/OPPrimaryInput';
import {ContactRequest} from '../../../../models/ContactRequest';
import {ContactModel} from '../../../../models/ContactModel';
import OPPrimaryButton from '../../atoms/primaryButton/OPPrimaryButton';

interface ContactModalProps {
  onClick: (title: string, email: string, phoneNumber: string, id?: number) => void;
  onHide: () => void;
  show: boolean;
  label: string;
  item?: ContactModel;
}

const initialValues: ContactRequest = {
    title: '',
    email: '',
    phoneNumber: ''
  };

export const ContactModal: React.FC<ContactModalProps> = ({
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
          validationSchema={contactValidationScheme}
          onSubmit={(values: ContactRequest) => {
            item ? onClick(values.title, values.email, values.phoneNumber, item.id) 
                : onClick(values.title, values.email, values.phoneNumber);
          }}>
          {formik => (
            <>
              <div className={styles.divFlex}>
                <Field
                  label="Title"
                  component={OPPrimaryInput}
                  placeholder="Enter title"
                  name="title"
                  type="text"
                  value={item ? item.title : initialValues.title}
                />
                <Field
                  label="Email Address"
                  component={OPPrimaryInput}
                  placeholder="Enter your email"
                  name="email"
                  type="text"
                  value={item ? item.email : initialValues.email}
                />
                <Field
                  label="Phone Number"
                  component={OPPrimaryInput}
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  type="text"
                  value={item ? item.phoneNumber : initialValues.phoneNumber}
                />
              </div>
              <div>
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

export default ContactModal;
