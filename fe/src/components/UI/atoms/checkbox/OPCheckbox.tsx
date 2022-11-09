import React from "react";
import classes from "./OPCheckbox.module.scss";
import {Field} from 'formik';

interface IOPCheckboxProps {
    name: string,
    label: string
}

const OPCheckbox: React.FC<IOPCheckboxProps> = (props) => {
    const {
      name,
      label
    } = props;

    return (
      <div style={{display: "flex", alignItems: "center"}}>
        <Field
            type="checkbox"
            name={name}
        />
        <label className={`${classes["input-label"]}`} style={{marginRight: 10}}>{label}</label>
      </div>
    );
  };

  export default OPCheckbox;