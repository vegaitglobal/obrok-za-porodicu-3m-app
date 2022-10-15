import OPSearchBar from "../../UI/atoms/searchBar/OPSearchBar";
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
        <div>
          <OPSearchBar placeholder="Search" />
        </div>
        <OPCarditemList />
      </div>
    </div>
  );
};

export default VolunteerActionsPage;
