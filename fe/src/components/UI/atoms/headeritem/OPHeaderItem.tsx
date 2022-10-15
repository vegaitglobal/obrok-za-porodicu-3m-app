import { NavLink } from "react-router-dom";

import classes from "./OPHeaderItem.module.scss";

interface IOPHeaderItemProps {
  text: string;
  link: string;
}

const OPHeaderItem: React.FC<IOPHeaderItemProps> = ({ text, link }) => {
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

export default OPHeaderItem;
