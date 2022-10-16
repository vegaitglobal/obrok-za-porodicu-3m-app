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
  updateVolunteerActionType
} from "../../../store/actions/volunteerActionTypeTypes";
import ActionTypeModal from "../../UI/molecules/actionTypeModal/ActionTypeModal";
import { useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import { VolunteerActionTypeModel } from "../../../models/VolunteerActionTypeModel";
import { VolunteerActionTypeRequest } from "../../../models/VolunteerActionTypeRequest";

const headers: string[] = ["Name", "Has pickup", "Has payment", "Actions"];

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

  const addActionTypeHandler = (name: string, hasPickup: boolean, hasPayment: boolean, id?: number) => {
    const data: VolunteerActionTypeRequest = {
      name: name,
      hasPickup: hasPickup,
      hasPayment: hasPayment,
    };
    setModalShow(false);
    console.log(data);
    dispatch(addVolunteerActionType(data));
  };

  const showDeleteHandler = (id: number) => {
    setId(id);
    setDeleteModalShow(true);
  }

  const updateActionTypeHandler = (name: string, hasPickup: boolean, hasPayment: boolean, id?: number) => {
    const data: VolunteerActionTypeModel = {
      id: id ? id : 0,
      name: name,
      hasPickup: hasPickup,
      hasPayment: hasPayment
    };
    setModalShow(false);
    setModalItem(undefined);
    console.log("UPDATE");
    console.log(data);
    dispatch(updateVolunteerActionType(data));
  };

  const handleClickEdit = (item: any) => {
    setModalItem(item);
    setModalShow(true);
    console.log("CLICK");
    console.log(item)
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
            <p className={globalClasses["add-text"]}>Add Action Type</p>
            <button className={globalClasses["add-button"]} onClick={() => setModalShow(true)}>Add</button>
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
        onHide={() => setModalShow(false)}
        label={modalItem ? "UPDATE ACTION TYPE" : "ADD ACTION TYPE"}
        item={modalItem}
      />
      <OPDeleteModal
        show={deleteModalShow}
        onDelete={deleteHandler}
        onHide={() => setDeleteModalShow(false)}
        type={"action type"}
      />
    </div>
  );
};

export default ActionTypesPage;