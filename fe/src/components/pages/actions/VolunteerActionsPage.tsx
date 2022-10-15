import OPSearchBar from "../../UI/atoms/searchBar/OPSearchBar";
import OPFilterItemList from "../../UI/molecules/filterItemList/OPFilterItemList";
import Header from "../../UI/molecules/header/OPHeader";
import OPCarditemList from "../../UI/organisms/cardItemList/OPCarditemList";
import classes from "./VolunteerActionsPage.module.scss";

const VolunteerActionsPage = () => {
  return (
    <div className={classes["volunteer-actions-page"]}>
      <div className={classes["content-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <Header />
        </div>
        <div className={classes["filter-wrapper"]}>
          <div>
            <OPSearchBar placeholder="Search" />
            <OPFilterItemList />
          </div>
          <OPCarditemList />
        </div>
      </div>
    </div>
  );
};

export default VolunteerActionsPage;
