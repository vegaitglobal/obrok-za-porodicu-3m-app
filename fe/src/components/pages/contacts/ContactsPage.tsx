import classes from "./ContactsPage.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";

const data: any = [
  {id: 1, title: "Obrok za porodicu", email: "obrokzaporodicu@gmail.com", phone: "+381 69 123 45 67"},
  {id: 2, title: "Obrok za porodicu", email: "obrokzaporodicu@gmail.com", phone: "+381 69 123 45 67"},
  {id: 3, title: "Obrok za porodicu", email: "obrokzaporodicu@gmail.com", phone: "+381 69 123 45 67"},
  {id: 4, title: "Obrok za porodicu", email: "obrokzaporodicu@gmail.com", phone: "+381 69 123 45 67"},
]

const headers: string[] = [
  "Title", "Email", "Phone"
]

const columnsToRender: string[] = [
  "title", "email", "phone"
]

const ActionTypesPage = () => {
  return (
    <div className={classes["contacts-page"]}>
      <div className={classes["content-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <Header />
        </div>
        <Table headers={headers} data={data} columns={columnsToRender} />
      </div>
    </div>
  );
};

export default ActionTypesPage;
