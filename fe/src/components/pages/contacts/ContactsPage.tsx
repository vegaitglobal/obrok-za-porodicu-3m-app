import classes from "./ContactsPage.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getContacts } from "../../../store/actions/contactTypes";
import ContactModal from '../../UI/molecules/contactModal/ContactModal';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

const headers: string[] = ["Title", "Email", "Phone number", "Actions"];

const columnsToRender: string[] = ["title", "email", "phoneNumber"];

const ContactPage = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const [modalShow, setModalShow] = useState(false);

  const addContact = (title: string, email: string, phone: string) => {
		const data: any = {
			title: title,
			email: email,
      phoneNumber: phone
		};
		setModalShow(false);
    console.log(data)
		//dispatch
	};

  return (
    <div className={classes["contacts-page"]}>
      <div className={classes["content-wrapper"]}>
        <div className={classes["header-wrapper"]}>
          <Header />
        </div>
        <div className={classes["table-wrapper"]}>
          <Table headers={headers} data={contacts} columns={columnsToRender} />
        </div>
        <div>
          Add Contact
          <button onClick={() => setModalShow(true)}>
            add
          </button>
        </div>
      </div>
      <ContactModal
				show={modalShow}
				onClick={addContact}
				onHide={() => setModalShow(false)}
				label={"Add action type"}
			/>
    </div>
  );
};

export default ContactPage;
