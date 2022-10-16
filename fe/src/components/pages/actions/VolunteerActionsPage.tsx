import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerActionTypes } from "../../../store/actions/volunteerActionTypeTypes";
import { RootState } from "../../../store/store";
import OPPrimaryButton from "../../UI/atoms/primaryButton/OPPrimaryButton";
import OPSearchBar from "../../UI/atoms/searchBar/OPSearchBar";
import OPFilterItemList from "../../UI/molecules/filterItemList/OPFilterItemList";
import Header from "../../UI/molecules/header/OPHeader";
import OPCarditemList from "../../UI/organisms/cardItemList/OPCarditemList";
import classes from "./VolunteerActionsPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import { getVolunteerActions } from "../../../store/actions/volunteerActionsType";

const VolunteerActionsPage = () => {
  const dispatch = useDispatch();
  const filterItems = useSelector(
    (state: RootState) => state.volunteerActionTypes.volunteerActionTypes
  );
  const volunteerActions = useSelector(
    (state: RootState) => state.volunterActions.volunteerActions
  );

  useEffect(() => {
    dispatch(getVolunteerActionTypes());
    dispatch(getVolunteerActions());
  }, []);

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={classes["filter-wrapper"]}>
            <OPSearchBar placeholder="Pretraži" />
            <OPFilterItemList filterItems={filterItems} />
            <div className={classes["search-button-wrapper"]}>
              <OPPrimaryButton text="Pretraži" onClick={() => {}} />
            </div>
          </div>
          <OPCarditemList items={volunteerActions} />
        </div>
      </div>
    </div>
  );
};

export default VolunteerActionsPage;
