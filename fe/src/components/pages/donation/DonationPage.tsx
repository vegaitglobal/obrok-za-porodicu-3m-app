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
import { getAllVolunteerActions } from "../../../store/actions/volunteerActionsType";

const headers: string[] = [
  "Akcija",
  "Kompanija",
  "Ime i prezime",
  "Email",
  "Broj telefona",
  "Preuzimanje",
  "Adresa",
  "Uredi",
];

const columnsToRender: string[] = [
  "title",
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

  const volunteerActions = useSelector(
    (state: RootState) => state.volunterActions.allVolunteerActions
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
    dispatch(deleteDonation(id!));
    setDeleteModalShow(false);
  };

  useEffect(() => {
    dispatch(getDonations());
    dispatch(getAllVolunteerActions());
  }, []);

  const updateDonationHandler = (
    volunteerActionId: string | null,
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
      volunteerActionId: volunteerActionId ? parseInt(volunteerActionId) : null,
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
      })
    );
    setModalShow(false);
    setModalItem(undefined);
  };

  const addDonationHandler = (
    volunteerActionId: string | null,
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
      volunteerActionId: volunteerActionId ? parseInt(volunteerActionId) : null,
      isCompany,
      companyName,
      fullName,
      email,
      phoneNumber,
      description,
      isPickup,
      address,
    };
    dispatch(addDonation(donationDto));
    setModalShow(false);
  };

  const handleClickEdit = (item: any) => {
    setModalItem({
      ...item,
      volunteerActionId: item?.volunteerAction?.id || undefined,
    });
    setModalShow(true);
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <div className={classes["paragraph"]}>
            <div className={globalClasses["add-wrapper"]}>
              <p className={globalClasses["add-text"]}>Donacije</p>
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
                  (donation: any) => ({
                    ...donation,
                    title: donation?.volunteerAction?.title || "/",
                  })
                )}
                columns={columnsToRender}
                deleteHandler={showDeleteModal}
                onClickEdit={handleClickEdit}
              />
            </div>
          </div>
        </div>
      </div>
      <OPDeleteModal
        show={deleteModalShow}
        onDelete={deleteHandler}
        onHide={() => setDeleteModalShow(false)}
        type={"donaciju"}
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
        actions={volunteerActions}
      />
    </div>
  );
};

export default DonationPage;