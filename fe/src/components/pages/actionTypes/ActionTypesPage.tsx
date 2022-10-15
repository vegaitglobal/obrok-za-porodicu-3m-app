import classes from "./ActionTypesPage.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";

const data: any = [
  {id: 1, name: "Odeca", hasPickup: true, hasPayment: true},
  {id: 2, name: "Novac", hasPickup: false, hasPayment: true},
  {id: 3, name: "Hrana", hasPickup: false, hasPayment: true},
  {id: 4, name: "Obuca", hasPickup: false, hasPayment: true},
]

const headers: string[] = [
  "Name", "Has pickup", "Has payment"
]

const columnsToRender: string[] = [
  "name", "hasPickup", "hasPayment"
]

const ActionTypesPage = () => {
  return (
    <div className={classes["action-types-page"]}>
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
