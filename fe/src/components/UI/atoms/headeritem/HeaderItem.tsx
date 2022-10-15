import { NavLink } from "react-router-dom";

import classes from "./HeaderItem.module.scss";

interface IHeaderItemProps {
  text: string;
  link: string;
}

const HeaderItem: React.FC<IHeaderItemProps> = ({ text, link }) => {
  const activeStyle = {
    background: "#EF6852",
    borderRadius: "7px",
  };

  return (
    <div className={classes["header-item"]}>
      <NavLink
        end
        to={link}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={classes["header-link"]}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default HeaderItem;
