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
  updateContact,
} from "../../../store/actions/contactTypes";
import ContactModal from "../../UI/molecules/contactModal/ContactModal";
import { useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import { ContactModel } from "../../../models/ContactModel";

const headers: string[] = ["Kontakt", "Email", "Broj telefona", "Uredi"];

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

  const addContactHandler = (
    title: string,
    email: string,
    phoneNumber: string
  ) => {
    const contactDto: ContactModel = {
      title,
      email,
      phoneNumber,
    };
    setModalShow(false);
    dispatch(addContact(contactDto));
  };

  const updateContactHandler = (
    title: string,
    email: string,
    phoneNumber: string
  ) => {
    const contactDto: ContactModel = {
      title,
      email,
      phoneNumber,
    };
    dispatch(
      updateContact({
        ...contactDto,
        id: modalItem ? modalItem["id"] : 0,
      })
    );
    setModalShow(false);
    setModalItem(undefined);
  };

  const handleClickEdit = (item: any) => {
    setModalItem(item);
    setModalShow(true);
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
            <p className={globalClasses["add-text"]}>Dodaj Kontakt</p>
            <button
              className={globalClasses["add-button"]}
              onClick={() => setModalShow(true)}
            >
              <span>+</span>Dodaj
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
          onHide={() => {
            setModalShow(false);
            setModalItem(undefined);
          }}
          label={modalItem ? "SA:UVAJ IZMENE" : "DODAJ KONTAKT"}
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
