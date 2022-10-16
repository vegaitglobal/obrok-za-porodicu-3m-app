import classes from "./BankAccountPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    getBankAccount
} from "../../../store/actions/bankAccountTypes";
import { RootState } from "../../../store/store";


const BankAccountPage = () => {
  const dispatch = useDispatch();
  const bankAccount = useSelector(
    (state: RootState) => state.bankAccount
  );

  useEffect(() => {
    dispatch(getBankAccount());
  }, []);

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <p className={classes["paragraph"]}>Bank account</p>
        </div>
      </div>
    </div>
  );
};

export default BankAccountPage;