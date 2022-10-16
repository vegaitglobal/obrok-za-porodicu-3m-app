import { Field, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginUserModel } from "../../../../models/LoginUserModel";
import { login } from "../../../../store/actions/authType";
import { RootState } from "../../../../store/store";
import { loginValidationScheme } from "../../../validators/loginValidationScheme";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";

import classes from "./OPLoginForm.module.scss";

const initialValues: LoginUserModel = {
  email: "",
  password: "",
};

const OPLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store: RootState) => store.auth.loggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate("/volunteer-action");
  }, [isLoggedIn]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationScheme}
      onSubmit={(values: LoginUserModel) => {
        const data: LoginUserModel = {
          email: values.email,
          password: values.password,
        };

        dispatch(login(data));
      }}
    >
      {(formik) => (
        <div>
          <Field
            label="Email Address"
            component={OPPrimaryInput}
            placeholder="Enter your email"
            name="email"
            type="text"
            styleForInput={classes["input-box"]}
            value=""
          />
          <Field
            secureTextEntry
            label="Password"
            component={OPPrimaryInput}
            placeholder="Enter your password"
            name="password"
            type="text"
            styleForInput={classes["input-box"]}
            value=""
          />
          <div
            className={`${classes["button-wrapper"]}  ${classes["form-item"]}`}
          >
            <OPPrimaryButton
              onClick={() => formik.handleSubmit()}
              text="LOGIN"
              type="submit"
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default OPLoginForm;
