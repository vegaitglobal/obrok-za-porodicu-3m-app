import classes from "./ContactsPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import {
  deleteContact,
  getContacts,
} from "../../../store/actions/contactTypes";
import ContactModal from "../../UI/molecules/contactModal/ContactModal";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";

const headers: string[] = ["Title", "Email", "Phone number", "Actions"];

const columnsToRender: string[] = ["title", "email", "phoneNumber", "actions"];

const ContactPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [id, setId] = useState<number>();

  const addContact = (title: string, email: string, phone: string) => {
    const data: any = {
      title: title,
      email: email,
      phoneNumber: phone,
    };
    setModalShow(false);
    console.log(data);
    //dispatch
  };

  const showDeleteModal = (id: number) => {
    setDeleteModalShow(true);
    setId(id);
  };

  const deleteHandler = () => {
    console.log(id);
    dispatch(deleteContact(id!));
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={globalClasses["add-wrapper"]}>
            <p className={globalClasses["add-text"]}>Add Contact</p>
            <button className={globalClasses["add-button"]} onClick={() => setModalShow(true)}>Add</button>
          </div>
          <div className={classes["table-wrapper"]}>
            <Table
              headers={headers}
              data={contacts}
              columns={columnsToRender}
              deleteHandler={showDeleteModal}
            />
          </div>
        </div>
        <ContactModal
          show={modalShow}
          onClick={addContact}
          onHide={() => setModalShow(false)}
          label={"Add action type"}
        />
      </div>
      <OPDeleteModal
        show={deleteModalShow}
        onDelete={deleteHandler}
        onHide={() => setDeleteModalShow(false)}
        type={"contact"}
      />
    </div>
  );
};

export default ContactPage;
