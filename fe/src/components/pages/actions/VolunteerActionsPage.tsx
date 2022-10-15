import Header from "../../UI/molecules/header/Header";
import CarditemList from "../../UI/organisms/cardItemList/CarditemList";
import classes from "./VolunteerActionsPage.module.scss";

const VolunteerActionsPage = () => {
  return (
    <div className={classes["volunteer-actions-page"]}>
      <div className={classes["content-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <Header />
        </div>
        <CarditemList />
      </div>
    </div>
  );
};

export default VolunteerActionsPage;
