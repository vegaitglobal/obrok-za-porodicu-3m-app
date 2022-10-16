import classes from "./AboutUsPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";

const AboutUsPage = () => {


  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <p className={classes["paragraph"]}>About Us Page</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;