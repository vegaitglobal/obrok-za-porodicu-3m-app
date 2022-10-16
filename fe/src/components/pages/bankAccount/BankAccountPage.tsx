import classes from "./BankAccountPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    getBankAccount, updateBankAccount
} from "../../../store/actions/bankAccountTypes";
import { RootState } from "../../../store/store";
import { Field, Formik } from "formik";
import OPPrimaryInput from "../../UI/atoms/primaryInput/OPPrimaryInput";
import OPPrimaryButton from "../../UI/atoms/primaryButton/OPPrimaryButton";
import { BankAccountModel } from "../../../models/BankAccountModel";
import styles from './BankAccountPage.module.scss';
import { bankAccountValidationScheme } from "../../validators/bankAccountValidationScheme";


const initialValues: BankAccountModel = {
  id: null,
  receiverName: '',
  receiverCity: '',
  receiverAddress: '',
  accountNumber: '',
  transactionModel: null,
  referenceNumber: null,
  phoneNumber: null
};

const BankAccountPage = () => {
  const dispatch = useDispatch();
  const bankAccount = useSelector(
    (state: RootState) => state.bankAccount.bankAccount
  );

  useEffect(() => {
    dispatch(getBankAccount());
  }, []);

  const updateBankAccountHandler = (
      receiverName: string,
      receiverCity: string,
      receiverAddress: string,
      accountNumber: string,
      transactionModel: number | null | undefined,
      referenceNumber: string | null | undefined,
      phoneNumber: string | null | undefined
    ) => {
    const data: BankAccountModel = {
      id: bankAccount.id,
      receiverName,
      receiverCity,
      receiverAddress,
      accountNumber,
      transactionModel,
      referenceNumber,
      phoneNumber
    };
    dispatch(updateBankAccount(data));
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={globalClasses["add-wrapper"]}>
            <p className={globalClasses["add-text"]}>Bankovni račun</p>
          </div>
          <div className={globalClasses["table-wrapper"]}>
            <Formik
              initialValues={bankAccount ? bankAccount : initialValues}
              validationSchema={bankAccountValidationScheme}
              onSubmit={(values: BankAccountModel) => updateBankAccountHandler(
                values.receiverName,
                values.receiverCity,
                values.receiverAddress,
                values.accountNumber,
                values.transactionModel,
                values.referenceNumber,
                values.phoneNumber)
              }
              enableReinitialize>
              {formik => (
                <>
                  <div className={styles.divFlex}>
                    <Field
                      label="Naziv primaoca"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="receiverName"
                      type="text"
                      value={bankAccount ? bankAccount.receiverName : initialValues.receiverName}
                    />
                    <Field
                      label="Grad primaoca"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="receiverCity"
                      type="text"
                      value={bankAccount ? bankAccount.receiverCity : initialValues.receiverCity}
                    />
                    <Field
                      label="Adresa primaoca"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="receiverAddress"
                      type="text"
                      value={bankAccount ? bankAccount.receiverAddress : initialValues.receiverAddress}
                    />
                    <Field
                      label="Žiro račun primaoca"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="accountNumber"
                      type="text"
                      value={bankAccount ? bankAccount.accountNumber : initialValues.accountNumber}
                    />
                    <Field
                      label="Model uplate"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="transactionModel"
                      type="number"
                      value={bankAccount ? bankAccount.transactionModel : initialValues.transactionModel}
                    />
                    <Field
                      label="Poziv na broj"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="referenceNumber"
                      type="text"
                      value={bankAccount ? bankAccount.referenceNumber : initialValues.referenceNumber}
                    />
                    <Field
                      label="Broj telefona"
                      component={OPPrimaryInput}
                      placeholder="Enter Name"
                      name="phoneNumber"
                      type="text"
                      value={bankAccount ? bankAccount.phoneNumber : initialValues.phoneNumber}
                    />
                  </div>
                  <div>
                    <OPPrimaryButton
                      onClick={() => formik.handleSubmit()}
                      text="Sačuvaj"
                      type="submit"
                      style={styles.btn}></OPPrimaryButton>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountPage;