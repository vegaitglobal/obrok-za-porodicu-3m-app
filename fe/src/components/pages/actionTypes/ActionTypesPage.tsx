import classes from "./ActionTypesPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Table from "../../UI/molecules/table/Table";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getVolunteerActionTypes } from "../../../store/actions/volunteerActionTypeTypes";
import ActionTypeModal from '../../UI/molecules/actionTypeModal/ActionTypeModal';
import {useState} from 'react';

const headers: string[] = ["Name", "Has pickup", "Has payment"];

const columnsToRender: string[] = ["name", "hasPickup", "hasPayment"];

const ActionTypesPage = () => {
  const dispatch = useDispatch();
  const actionTypes = useSelector(
    (state: RootState) => state.volunteerActionTypes.volunteerActionTypes
  );

  useEffect(() => {
    dispatch(getVolunteerActionTypes());
  }, []);

  const [modalShow, setModalShow] = useState(false);

  const addActionType = (name: string, hasPickup: boolean, hasPayment: boolean) => {
    const data: any = {
      name: name,
      hasPickup: hasPickup,
      hasPayment: hasPayment
    };
    setModalShow(false);
    console.log(data)
    //dispatch
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div>
          <span>Add Action Type</span>
          <button onClick={() => setModalShow(true)}>
            add
          </button>
        </div>
        <div className={classes["table-wrapper"]}>
          <Table
            headers={headers}
            data={actionTypes}
            columns={columnsToRender}
            />
        </div>
      </div>
      <ActionTypeModal
        show={modalShow}
        onClick={addActionType}
        onHide={() => setModalShow(false)}
        label={"Add action type"}
      />
    </div>
  );
};

export default ActionTypesPage;
