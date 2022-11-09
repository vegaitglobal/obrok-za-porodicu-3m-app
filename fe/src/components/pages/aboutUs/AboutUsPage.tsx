import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAboutUs, updateAboutUs
} from "../../../store/actions/aboutUsTypes";
import OPPrimaryButton from "../../UI/atoms/primaryButton/OPPrimaryButton";
import styles from './AboutUsPage.module.scss';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { RootState } from "../../../store/store";
import { AboutUsModel } from "../../../models/AboutUsModel";
import { Formik } from "formik";


const AboutUsPage = () => {
  const dispatch = useDispatch();

  const aboutUs = useSelector(
    (state: RootState) => state.aboutUs.aboutUs
  );

  const [html, setHtml] = useState(aboutUs.description);

  useEffect(() => {
    dispatch(getAboutUs());
  }, []);
  

  const onChange = (e:any) => {
    setHtml(e.target.value);
  }

  const onSave = (e:any) => {
    if(html) {
      const data: AboutUsModel = {
        id: aboutUs.id,
        description: html,
        rawDescription: html
      };
      dispatch(updateAboutUs(data));
    }
  }

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]} >
          <div className={globalClasses["add-wrapper"]}>
            <p className={globalClasses["add-text"]}>O nama</p>
          </div>
          <div className={globalClasses["table-wrapper"]} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="content-wrapper" style={{width: "600px", }}>
              <Formik
                initialValues={{}}
                onSubmit={onSave}
                enableReinitialize>
                {formik => (<>
                <div className={styles.divFlex}>

                  <DefaultEditor value={html ? html : aboutUs.description} onChange={onChange} />

                </div>
                <div className={globalClasses["HTML"]}>
                  <OPPrimaryButton
                    onClick={() => formik.handleSubmit()}
                    text="Sačuvaj"
                    type="submit"
                    style={styles.btn}></OPPrimaryButton>
                </div>
                </>)}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;