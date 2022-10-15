import { IHeaderValues } from "../../../../typings/headerValues";
import OPHeaderItem from "../../atoms/headeritem/OPHeaderItem";
import { Images } from "../../../../constants/Images";

import classes from "./OPHeader.module.scss";

const HEADER_VALUES: IHeaderValues[] = [
  {
    text: "Volunteer action types",
    link: "/volunteer-action-type",
  },
  {
    text: "Volunteer actions",
    link: "/volunteer-action",
  },
  {
    text: "Donation",
    link: "/donation",
  },
  {
    text: "News",
    link: "/news",
  },
  {
    text: "Contact",
    link: "/contact",
  },
  {
    text: "About us",
    link: "/about-us",
  },
];

const OPHeader = () => {
  return (
    <header className={classes["header-wrapper"]}>
      <div className={classes["header-content"]}>
        <div className={classes["header-logo-wrapper"]}>
          <img src={Images.HeaderLogo} alt="Logo" width="68" height="68" />
        </div>
        {HEADER_VALUES.map((value, index) => (
          <OPHeaderItem key={index} text={value.text} link={value.link} />
        ))}
      </div>
    </header>
  );
};

export default OPHeader;
