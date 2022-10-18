import classes from "./DonationPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";
import Table from "../../UI/molecules/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import {
  addDonation,
  deleteDonation,
  getDonations,
  updateDonation,
} from "../../../store/actions/donationType";
import { useEffect, useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import DonationModal from "../../UI/molecules/donationModal/DonationModal";
import { DonationDTOModel } from "../../../models/DonationModel";
import { getVolunteerActionTypes } from "../../../store/actions/volunteerActionTypeTypes";

const headers: string[] = [
  "Tip",
  "Preduzeće",
  "Ime i prezime",
  "Email",
  "Broj telefona",
  "Preuzimanje",
  "Adresa",
  "Uredi",
];

const columnsToRender: string[] = [
  "name",
  "isCompany",
  "fullName",
  "email",
  "phoneNumber",
  "isPickup",
  "address",
  "actions",
];

const DonationPage = () => {
  const dispatch = useDispatch();
  const donations = useSelector((state: RootState) => state.donation.donations);

  const volunteerActionTypes = useSelector(
    (state: RootState) => state.volunteerActionTypes.volunteerActionTypes
  );

  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(undefined);
  const [id, setId] = useState<number>();

  const showDeleteModal = (id: number) => {
    setDeleteModalShow(true);
    setId(id);
  };

  const deleteHandler = () => {
    console.log(id);
    dispatch(deleteDonation(id!));
    setDeleteModalShow(false);
  };

  useEffect(() => {
    dispatch(getDonations());
    dispatch(getVolunteerActionTypes());
  }, []);

  const updateDonationHandler = (
    volunteerActionTypeId: string,
    isCompany: boolean,
    companyName: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    description: string,
    isPickup: boolean,
    address: string
  ) => {
    const donationDto: DonationDTOModel = {
      volunteerActionTypeId: +volunteerActionTypeId,
      isCompany,
      companyName,
      fullName,
      email,
      phoneNumber,
      description,
      isPickup,
      address,
    };
    dispatch(
      updateDonation({
        ...donationDto,
        id: modalItem ? modalItem["id"] : 0,
        volunteerActionId: 1,
      })
    );
    setModalShow(false);
  };

  const addDonationHandler = (
    volunteerActionTypeId: string,
    isCompany: boolean,
    companyName: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    description: string,
    isPickup: boolean,
    address: string
  ) => {
    const donationDto: DonationDTOModel = {
      volunteerActionTypeId: +volunteerActionTypeId,
      isCompany,
      companyName,
      fullName,
      email,
      phoneNumber,
      description,
      isPickup,
      address,
    };
    dispatch(
      addDonation({
        ...donationDto,
        volunteerActionId: 1,
      })
    );
    setModalShow(false);
  };

  const handleClickEdit = (item: any) => {
    setModalItem({
      ...item,
      volunteerActionTypeId: item.volunteerActionType.id,
    });
    setModalShow(true);
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <p className={classes["paragraph"]}>
            <div className={globalClasses["add-wrapper"]}>
              <p className={globalClasses["add-text"]}>Dodaj donaciju</p>
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
                data={donations.map(
                  (donation: { volunteerActionType: { name: any } }) => ({
                    ...donation,
                    name: donation.volunteerActionType
                      ? donation.volunteerActionType.name
                      : "/",
                  })
                )}
                columns={columnsToRender}
                deleteHandler={showDeleteModal}
                onClickEdit={handleClickEdit}
              />
            </div>
          </p>
        </div>
      </div>
      <OPDeleteModal
        show={deleteModalShow}
        onDelete={deleteHandler}
        onHide={() => setDeleteModalShow(false)}
        type={"donation"}
      />
      <DonationModal
        show={modalShow}
        onClick={modalItem ? updateDonationHandler : addDonationHandler}
        onHide={() => {
          setModalShow(false);
          setModalItem(undefined);
        }}
        label={modalItem ? "SAČUVAJ IZMENE" : "DODAJ DONACIJU"}
        item={modalItem}
        actionTypes={volunteerActionTypes}
      />
    </div>
  );
};

export default DonationPage;
