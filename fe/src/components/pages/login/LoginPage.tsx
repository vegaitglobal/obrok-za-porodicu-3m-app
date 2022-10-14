import { Images } from "../../../constants/Images";

import classes from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={classes["login-body"]}>
      <div className={classes["login-form"]}>
        <div className={classes["logo-wrapper"]}>
          <img src={Images.Logo} alt="logo" className={classes.logo} />
        </div>
      </div>
      <div className={classes["right-panel"]} />
    </div>
  );
};

export default LoginPage;
