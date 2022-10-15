import { IHeaderValues } from "../../../../typings/headerValues";
import OPHeaderItem from "../../atoms/headeritem/OPHeaderItem";

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
    text: "About us",
    link: "/about-us",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const OPHeader = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["logo-wrapper"]}>Logo</div>
      {HEADER_VALUES.map((value) => (
        <OPHeaderItem text={value.text} link={value.link} />
      ))}
    </div>
  );
};

export default OPHeader;
