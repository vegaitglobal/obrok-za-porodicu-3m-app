import OPSearchBar from "../../UI/atoms/searchBar/OPSearchBar";
import Header from "../../UI/molecules/header/OPHeader";
import OPCarditemList from "../../UI/organisms/cardItemList/OPCarditemList";
import classes from "./VolunteerActionsPage.module.scss";
import { Table } from "../../UI/molecules/table/Table";


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
        <Table headers={headers} data={data} columns={columnsToRender} />
      </div>
    </div>
  );
};

export default VolunteerActionsPage;
