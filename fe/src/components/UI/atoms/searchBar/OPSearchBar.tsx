import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";

import classes from "./OPSearchBar.module.scss";

interface IOPSearchBarProps {
  placeholder: string;
}

const OPSearchBar: React.FC<IOPSearchBarProps> = ({ placeholder }) => {
  return (
    <div className={classes["search-bar-wrapper"]}>
      <SearchIcon height={30} width={30} />
      <input placeholder={placeholder} className={classes["search-bar"]} />
    </div>
  );
};

export default OPSearchBar;
