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
  addContact,
  updateContact
} from "../../../store/actions/contactTypes";
import ContactModal from "../../UI/molecules/contactModal/ContactModal";
import { useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import { ContactRequest } from "../../../models/ContactRequest";
import { ContactModel } from "../../../models/ContactModel";

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
  const [modalItem, setModalItem] = useState(undefined);
  const [id, setId] = useState<number>();

  const addContactHandler = (title: string, email: string, phone: string, id?: number) => {
    const data: ContactRequest = {
      title: title,
      email: email,
      phoneNumber: phone,
    };
    setModalShow(false);
    dispatch(addContact(data));
  };

  const updateContactHandler = (title: string, email: string, phone: string, id?: number) => {
    const data: ContactModel = {
      id: id ? id : 0,
      title: title,
      email: email,
      phoneNumber: phone
    };
    setModalShow(false);
    setModalItem(undefined);
    console.log("UPDATE");
    console.log(data)
    dispatch(updateContact(data));
  };

  const handleClickEdit = (item: any) => {
    setModalItem(item);
    setModalShow(true);
    console.log("CLICK");
    console.log(item)
  };

  const showDeleteModal = (id: number) => {
    setDeleteModalShow(true);
    setId(id);
  };

  const deleteHandler = () => {
    console.log(id);
    setDeleteModalShow(false);
    dispatch(deleteContact(id!));
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={globalClasses["add-wrapper"]}>
            <p className={globalClasses["add-text"]}>Add Contact</p>
            <button
              className={globalClasses["add-button"]}
              onClick={() => setModalShow(true)}
            >
              <span>+</span>Add
            </button>
          </div>
          <div className={classes["table-wrapper"]}>
            <Table
              headers={headers}
              data={contacts}
              columns={columnsToRender}
              deleteHandler={showDeleteModal}
              onClickEdit={handleClickEdit}
            />
          </div>
        </div>
        <ContactModal
          show={modalShow}
          onClick={modalItem ? updateContactHandler : addContactHandler}
          onHide={() => setModalShow(false)}
          label={modalItem ? "UPDATE CONTACT" : "ADD CONTACT"}
          item={modalItem}
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