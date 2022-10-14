import { Images } from "../../../constants/Images";
import LoginForm from "../../UI/molecules/loginForm/LoginForm";

import classes from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={classes["login-body"]}>
      <div className={classes["login-form"]}>
        <div className={classes["logo-wrapper"]}>
          <img src={Images.Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes["form-wrapper"]}>
          <LoginForm />
        </div>
      </div>
      <div className={classes["right-panel"]} />
    </div>
  );
};

export default LoginPage;
