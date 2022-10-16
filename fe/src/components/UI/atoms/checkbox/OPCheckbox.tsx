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
      <div>
        <label className={`${classes["input-label"]}`}>{label}</label><br/>
        <Field 
            type="checkbox" 
            name={name}
        />
      </div>
    );
  };
  
  export default OPCheckbox;