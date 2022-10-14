import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginUserModel } from "../../../../models/LoginUserModel";
import { loginValidationScheme } from "../../../validators/loginValidationScheme";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import OPPrimaryInput from "../../atoms/primaryInput/OPPrimaryInput";

import classes from "./LoginForm.module.scss";

const initialValues: LoginUserModel = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationScheme}
      onSubmit={(values: LoginUserModel) => {
        const data: LoginUserModel = {
          email: values.email,
          password: values.password,
        };

        // dispatch(login(data));
        navigate("/home");
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
          <li
            className={`${classes["button-wrapper"]}  ${classes["form-item"]}`}
          >
            <OPPrimaryButton
              onClick={() => formik.handleSubmit()}
              text="LOGIN"
              type="submit"
            />
          </li>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
