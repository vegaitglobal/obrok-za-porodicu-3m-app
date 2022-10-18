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
  addVolunteerAction,
  getActionStatuses,
  getVolunteerActions,
  updateVolunteerAction,
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

  const updateVolunteerActionHandler = (
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
    dispatch(
      updateVolunteerAction({
        ...actionDto,
        id: modalItem ? modalItem["id"] : 0,
      })
    );
    setModalShow(false);
    setModalItem(undefined);
  };

  const handleClickEdit = (item: any) => {
    setModalItem({
      ...item,
      typeId: item.type.id,
      statusId: item.status.id,
    });
    setModalShow(true);
  };

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

    dispatch(addVolunteerAction(actionDto));
    setModalShow(false);
  };
  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={classes["filter-wrapper"]}>
            <OPSearchBar placeholder="Pretraži" />
            <OPFilterItemList filterItems={volunteerActionTypes} />
            <div className={classes["search-and-add-button-wrapper"]}>
              <OPPrimaryButton
                text="Pretraži"
                onClick={() => {}}
                style={searchButtonStyle}
              />
              <OPPrimaryButton
                text="Dodaj"
                onClick={() => setModalShow(true)}
                style={addButtonStyle}
              />
            </div>
          </div>
          <OPCarditemList
            items={volunteerActions}
            onClickEdit={handleClickEdit}
          />
        </div>
      </div>
      <VolunteerActionModal
        show={modalShow}
        onClick={
          modalItem ? updateVolunteerActionHandler : addVolunteerActionHandler
        }
        onHide={() => {
          setModalShow(false);
          setModalItem(undefined);
        }}
        label={modalItem ? "SAČUVAJ IZMENE" : "DODAJ AKCIJU"}
        item={modalItem}
        actionStatuses={volunteerActionStatuses}
        actionTypes={volunteerActionTypes}
      />
    </div>
  );
};

export default VolunteerActionsPage;
