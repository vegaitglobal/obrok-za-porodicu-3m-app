import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerActionTypes } from "../../../store/actions/volunteerActionTypeTypes";
import { RootState } from "../../../store/store";
import OPPrimaryButton from "../../UI/atoms/primaryButton/OPPrimaryButton";
import OPSearchBar from "../../UI/atoms/searchBar/OPSearchBar";
import OPFilterItemList from "../../UI/molecules/filterItemList/OPFilterItemList";
import Header from "../../UI/molecules/header/OPHeader";
import OPCarditemList from "../../UI/organisms/cardItemList/OPCarditemList";
import classes from "./VolunteerActionsPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import {
  addVolunteerActionStatus,
  getActionStatuses,
  getVolunteerActions,
} from "../../../store/actions/volunteerActionsType";
import { Colors } from "../../../constants/Colors";
import VolunteerActionModal from "../../UI/molecules/volunteerActionModal/VolunteerActionModal";
import { VolunteerActionDTOModel } from "../../../models/VolunteerActionModel";

const VolunteerActionsPage = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(undefined);

  const volunteerActionTypes = useSelector(
    (state: RootState) => state.volunteerActionTypes.volunteerActionTypes
  );
  const volunteerActions = useSelector(
    (state: RootState) => state.volunterActions.volunteerActions
  );

  const volunteerActionStatuses = useSelector(
    (state: RootState) => state.volunterActions.volunteerActionStatuses
  );

  useEffect(() => {
    dispatch(getVolunteerActionTypes());
    dispatch(getVolunteerActions());
    dispatch(getActionStatuses());
  }, []);

  const searchButtonStyle = {
    marginRight: 20,
  };
  const addButtonStyle = {
    backgroundColor: Colors.GREEN,
    borderColor: Colors.GREEN,
  };

  const updateVolunteerActionHandler = () => {};
  const addVolunteerActionHandler = (
    title: string,
    shortDescription: string,
    statusId: string,
    typeId: string,
    referenceNumber: string,
    imageURL: string
  ) => {
    const actionDto: VolunteerActionDTOModel = {
      title,
      shortDescription,
      statusId: +statusId,
      typeId: +typeId,
      referenceNumber,
      imageURL,
      rawDescription: "Opis",
      description: "Opis",
    };

    dispatch(addVolunteerActionStatus(actionDto));
    setModalShow(false);
  };
  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={classes["filter-wrapper"]}>
            <OPSearchBar placeholder="Search" />
            <OPFilterItemList filterItems={volunteerActionTypes} />
            <div className={classes["search-and-add-button-wrapper"]}>
              <OPPrimaryButton
                text="Search"
                onClick={() => {}}
                style={searchButtonStyle}
              />
              <OPPrimaryButton
                text="Add"
                onClick={() => setModalShow(true)}
                style={addButtonStyle}
              />
            </div>
          </div>
          <OPCarditemList items={volunteerActions} />
        </div>
      </div>
      <VolunteerActionModal
        show={modalShow}
        onClick={
          modalItem ? updateVolunteerActionHandler : addVolunteerActionHandler
        }
        onHide={() => setModalShow(false)}
        label={modalItem ? "UPDATE VOLUNTEER ACTION" : "ADD VOLUNTEER ACTION"}
        item={modalItem}
        actionStatuses={volunteerActionStatuses}
        actionTypes={volunteerActionTypes}
      />
    </div>
  );
};

export default VolunteerActionsPage;
