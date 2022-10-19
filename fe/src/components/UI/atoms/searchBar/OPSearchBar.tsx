import { useDispatch } from "react-redux";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";
import { setSearchTermVolunteerActions } from "../../../../store/actions/volunteerActionsType";

import classes from "./OPSearchBar.module.scss";

interface IOPSearchBarProps {
  placeholder: string;
}

const OPSearchBar: React.FC<IOPSearchBarProps> = ({ placeholder }) => {
  const dispatch = useDispatch();

  const handleSetSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearchTermVolunteerActions(e.currentTarget.value));
  };

  return (
    <div className={classes["search-bar-wrapper"]}>
      <SearchIcon height={30} width={30} />
      <input
        placeholder={placeholder}
        onChange={handleSetSearchTerm}
        className={classes["search-bar"]}
      />
    </div>
  );
};

export default OPSearchBar;
