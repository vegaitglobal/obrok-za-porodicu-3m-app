import classes from "./SubscribersPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import {
  deleteSubscribers,
  getSubscribers,
  addSubscribers,
  updateSubscribers,
} from "../../../store/actions/subscribersTypes";
import SubscribersModal from "../../UI/molecules/subscribersModal/SubscribersModal";
import { useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import { SubscribersModel } from "../../../models/SubscribersModel";

const headers: string[] = ["Email", "Uredi"];

const columnsToRender: string[] = ["email", "actions"];

const SubscribersPage = () => {
  const dispatch = useDispatch();
  const subscribers = useSelector((state: RootState) => state.subscribers.subscribers);

  useEffect(() => {
    dispatch(getSubscribers());
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(undefined);
  const [id, setId] = useState<number>();

  const addSubscribersHandler = (
    email: string,
  ) => {
    const subscriberDto: SubscribersModel = {
      email,
    };
    setModalShow(false);
    dispatch(addSubscribers(subscriberDto));
  };

  const updateSubscribersHandler = (
    email: string,
  ) => {
    const subscriberDto: SubscribersModel = {
      email,
    };
    dispatch(
      updateSubscribers({
        ...subscriberDto,
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
    setDeleteModalShow(false);
    dispatch(deleteSubscribers(id!));
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={globalClasses["add-wrapper"]}>
            <p className={globalClasses["add-text"]}>Pretplatnici</p>
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
              data={subscribers}
              columns={columnsToRender}
              deleteHandler={showDeleteModal}
              onClickEdit={handleClickEdit}
            />
          </div>
        </div>
        <SubscribersModal
          show={modalShow}
          onClick={modalItem ? updateSubscribersHandler : addSubscribersHandler}
          onHide={() => {
            setModalShow(false);
            setModalItem(undefined);
          }}
          label={modalItem ? "SAČUVAJ IZMENE" : "DODAJ PRETPLATNIKA"}
          item={modalItem}
        />
      </div>
      <OPDeleteModal
        show={deleteModalShow}
        onDelete={deleteHandler}
        onHide={() => setDeleteModalShow(false)}
        type={"pretplatnika"}
      />
    </div>
  );
};

export default SubscribersPage;
