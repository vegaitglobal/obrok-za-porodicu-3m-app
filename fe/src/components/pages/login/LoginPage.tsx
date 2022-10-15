import { Images } from "../../../constants/Images";
import OPLoginForm from "../../UI/molecules/loginForm/OPLoginForm";

import classes from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={classes["login-body"]}>
      <div className={classes["login-form"]}>
        <div className={classes["logo-wrapper"]}>
          <img src={Images.Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes["form-wrapper"]}>
          <OPLoginForm />
        </div>
      </div>
      <div className={classes["right-panel"]} />
    </div>
  );
};

export default LoginPage;
