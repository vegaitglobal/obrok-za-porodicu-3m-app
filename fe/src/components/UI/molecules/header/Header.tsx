import { IHeaderValues } from "../../../../typings/headerValues";
import HeaderItem from "../../atoms/headeritem/HeaderItem";

import classes from "./Header.module.scss";

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

const Header = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["logo-wrapper"]}>Logo</div>
      {HEADER_VALUES.map((value) => (
        <HeaderItem text={value.text} link={value.link} />
      ))}
    </div>
  );
};

export default Header;
