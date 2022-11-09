import classes from "./ActionTypesPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import {
  deleteActionType,
  getVolunteerActionTypes,
  addVolunteerActionType,
  updateVolunteerActionType,
} from "../../../store/actions/volunteerActionTypeTypes";
import ActionTypeModal from "../../UI/molecules/actionTypeModal/ActionTypeModal";
import { useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import { VolunteerActionTypeModel } from "../../../models/VolunteerActionTypeModel";

const headers: string[] = ["Tip akcija", "Preuzimanje", "Uplata", "Uredi"];

const columnsToRender: string[] = [
  "name",
  "hasPickup",
  "hasPayment",
  "actions",
];

const ActionTypesPage = () => {
  const dispatch = useDispatch();
  const actionTypes = useSelector(
    (state: RootState) => state.volunteerActionTypes.volunteerActionTypes
  );

  useEffect(() => {
    dispatch(getVolunteerActionTypes());
  }, []);

  const [id, setId] = useState<number>();
  const [modalShow, setModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(undefined);

  const addActionTypeHandler = (
    name: string,
    hasPickup: boolean,
    hasPayment: boolean
  ) => {
    const volunterActionTypeDto: VolunteerActionTypeModel = {
      name,
      hasPickup,
      hasPayment,
    };
    setModalShow(false);
    dispatch(addVolunteerActionType(volunterActionTypeDto));
  };

  const showDeleteHandler = (id: number) => {
    setId(id);
    setDeleteModalShow(true);
  };

  const updateActionTypeHandler = (
    name: string,
    hasPickup: boolean,
    hasPayment: boolean
  ) => {
    const volunterActionTypeDto: VolunteerActionTypeModel = {
      name,
      hasPickup,
      hasPayment,
    };
    dispatch(
      updateVolunteerActionType({
        ...volunterActionTypeDto,
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

  const deleteHandler = () => {
    setDeleteModalShow(false);
    dispatch(deleteActionType(id!));
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={globalClasses["add-wrapper"]}>
            <p className={globalClasses["add-text"]}>Dodaj tip akcije</p>
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
              data={actionTypes}
              columns={columnsToRender}
              deleteHandler={showDeleteHandler}
              onClickEdit={handleClickEdit}
            />
          </div>
        </div>
      </div>
      <ActionTypeModal
        show={modalShow}
        onClick={modalItem ? updateActionTypeHandler : addActionTypeHandler}
        onHide={() => {
          setModalShow(false);
          setModalItem(undefined);
        }}
        label={modalItem ? "SAČUVAJ IZMENE" : "DODAJ TIP AKCIJE"}
        item={modalItem}
      />
      <OPDeleteModal
        show={deleteModalShow}
        onDelete={deleteHandler}
        onHide={() => setDeleteModalShow(false)}
        type={"tip akcije"}
      />
    </div>
  );
};

export default ActionTypesPage;
