import classes from "./ContactsPage.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getContacts } from "../../../store/actions/contactTypes";

const headers: string[] = ["Title", "Email", "Phone number", "Actions"];

const columnsToRender: string[] = ["title", "email", "phoneNumber"];

const ActionTypesPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div className={classes["contacts-page"]}>
      <div className={classes["content-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <Header />
        </div>
        <div className={classes["table-wrapper"]}>
          <Table headers={headers} data={contacts} columns={columnsToRender} />
        </div>
      </div>
    </div>
  );
};

export default ActionTypesPage;
