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

const VolunteerActionsPage = () => {
  const dispatch = useDispatch();
  const filterItems = useSelector(
    (state: RootState) => state.volunteerActionTypes.volunteerActionTypes
  );

  useEffect(() => {
    dispatch(getVolunteerActionTypes());
  }, []);

  return (
    <div className={classes["volunteer-actions-page"]}>
      <div className={classes["content-wrapper"]}>
        <Header />
        <div className={classes["filter-wrapper"]}>
          <OPSearchBar placeholder="Search" />
          <div className={classes["filter-items"]}>
            <OPFilterItemList filterItems={filterItems} />
          </div>
          <div className={classes["search-button-wrapper"]}>
            <OPPrimaryButton text="Pretrazi" onClick={() => {}} />
          </div>
        </div>
        <OPCarditemList />
      </div>
    </div>
  );
};

export default VolunteerActionsPage;
