import globalClasses from "../../../constants/GlobalStyle.module.scss";

const NotFoundPage = () => {
  return (
    <div className={globalClasses["page-wrapper"]} style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>404</h1>
      <h4>Stranica nije pronađena</h4>
    </div>
  );
};

export default NotFoundPage;
