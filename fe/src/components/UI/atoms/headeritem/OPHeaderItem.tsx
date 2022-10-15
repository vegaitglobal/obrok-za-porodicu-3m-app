import { NavLink } from "react-router-dom";
import classes from "./OPHeaderItem.module.scss";

interface IOPHeaderItemProps {
  text: string;
  link: string;
}

const OPHeaderItem: React.FC<IOPHeaderItemProps> = ({ text, link }) => {

  return (
    <NavLink
      end
      to={link}
      className={({ isActive }) => (isActive ? classes["header-link--active"] : classes["header-link"])}
    >
      {text}
    </NavLink>
  );
};

export default OPHeaderItem;
