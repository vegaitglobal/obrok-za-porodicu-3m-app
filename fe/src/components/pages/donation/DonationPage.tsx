import classes from "./DonationPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";

const DonationPage = () => {


  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <p className={classes["paragraph"]}>Donation Page</p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;