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
} from "../../../store/actions/volunteerActionTypeTypes";
import ActionTypeModal from "../../UI/molecules/actionTypeModal/ActionTypeModal";
import { useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";

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

  const addActionType = (
    name: string,
    hasPickup: boolean,
    hasPayment: boolean
  ) => {
    const data: any = {
      name: name,
      hasPickup: hasPickup,
      hasPayment: hasPayment,
    };
    setModalShow(false);
  };

  const showDeleteHandler = (id: number) => {
    setId(id);
    setDeleteModalShow(true);
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
          <div>
            <span>Add Action Type</span>
            <button onClick={() => setModalShow(true)}>add</button>
          </div>
          <div className={classes["table-wrapper"]}>
            <Table
              headers={headers}
              data={actionTypes}
              columns={columnsToRender}
              deleteHandler={showDeleteHandler}
            />
          </div>
        </div>
      </div>
      <ActionTypeModal
        show={modalShow}
        onClick={addActionType}
        onHide={() => setModalShow(false)}
        label={"Add action type"}
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
