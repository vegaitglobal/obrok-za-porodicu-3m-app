import React from "react";
import { Dots } from "react-activity";
import classes from "./OPPrimaryButton.module.scss";

interface IOPPrimaryButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
  isLoading?: boolean;
}
const OPPrimaryButton: React.FC<IOPPrimaryButtonProps> = ({
  onClick,
  text,
  style = {},
  type = "button",
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${classes["login-btn"]}`}
      style={style}
      onClick={onClick}
      type={type}
    >
      {isLoading ? <Dots /> : text}
    </button>
  );
};

export default OPPrimaryButton;
