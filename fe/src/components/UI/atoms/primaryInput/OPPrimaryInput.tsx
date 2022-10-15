import { ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { ReactComponent as EyeIcon } from "../../../../assets/icons/eye.svg";
import { ReactComponent as SlashedEyeIcon } from "../../../../assets/icons/eye_closed.svg";
import { ReactComponent as InputError } from "../../../../assets/icons/input_error.svg";
import { FormikField, FormikForm } from "../../../../models/formik/Formik";
import classes from "./OPPrimaryInput.module.scss";

interface IOPPrimaryInputProps {
  field: FormikField;
  form: FormikForm;
  label: string;
  editable: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  textArea?: boolean;
  style?: string;
  styleForErrorLabel?: string;
  styleForInput?: string;
  styleForErrorIcon?: string;
  value: string;
  number?: boolean;
}

const OPPrimaryInput: React.FC<IOPPrimaryInputProps> = (props) => {
  const {
    field: { name, onBlur, onChange },
    form: { errors, touched, setFieldTouched },
    label,
    editable,
    placeholder,
    secureTextEntry,
    textArea,
    style = {},
    styleForInput = {},
    styleForErrorLabel = {},
    styleForErrorIcon = {},
    value,
    number,
  } = props;

  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(errors[name] && touched[name]);

  useEffect(() => {
    setError(errors[name] && touched[name]);
  }, [errors, name, touched]);

  const handleOnFocus = () => {
    setFieldTouched(name);
  };
  const handleSecureTextEntry = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <label className={`${classes["input-label"]}  ${style}`}>{label}</label>
      <div className={`${classes["input-container"]}`} >
        <input
          placeholder={placeholder}
          name={name}
          defaultValue={value as string}
          autoCapitalize="none"
          className={
            !error
              ? `${classes["input-field"]} ${styleForInput}`
              : `${classes["input-error"]} ${styleForInput}`
          }
          onFocus={handleOnFocus}
          type={
            secureTextEntry && !passwordShown
              ? "password"
              : number
              ? "number"
              : "text"
          }
          onChange={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
        />
        {name === "email" && error && (
          <span
            style={stylesObject.errorIconContainer}
            className={`${styleForErrorIcon}`}
          >
            <InputError />
          </span>
        )}
        {secureTextEntry && (
          <span
            style={stylesObject.eyeIconContainer}
            onClick={handleSecureTextEntry}
          >
            {passwordShown ? (
              <SlashedEyeIcon width={20} height={16} />
            ) : (
              <EyeIcon width={20} height={13} />
            )}
          </span>
        )}
      </div>
      <ErrorMessage
        component="div"
        name={name}
        className={`${classes["error"]} ${styleForErrorLabel}`}
      />
    </div>
  );
};

const stylesObject = {
  eyeIconContainer: {
    position: "absolute" as "absolute",
    right: "5px",
    top: "42px",
    cursor: "pointer",
  },
  errorIconContainer: {
    position: "absolute" as "absolute",
    right: "5px",
    top: "42px",
  },
};

export default OPPrimaryInput;
