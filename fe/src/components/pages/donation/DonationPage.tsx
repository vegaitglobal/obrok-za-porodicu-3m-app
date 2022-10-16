import classes from "./DonationPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";
import Table from "../../UI/molecules/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import {
  deleteDonation,
  getDonations,
} from "../../../store/actions/donationType";
import { useEffect, useState } from "react";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";

const headers: string[] = [
  "Type",
  "Company",
  "Full name",
  "Email",
  "Phone number",
  "Pickup",
  "Address",
  "Actions",
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

  const [deleteModalShow, setDeleteModalShow] = useState(false);
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
  }, []);

  const handleClickEdit = () => {
    console.log("CLICK");
  };


  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <p className={classes["paragraph"]}>
            <div className={globalClasses["add-wrapper"]}>
              <p className={globalClasses["add-text"]}>Add Contact</p>
              <button
                className={globalClasses["add-button"]}
                onClick={() => {}}
              >
                <span>+</span>Add
              </button>
            </div>
            <div className={classes["table-wrapper"]}>
              <Table
                headers={headers}
                data={donations.map((donation: { volunteerActionType: { name: any; }; }) => ({
                  ...donation,
                  name: donation.volunteerActionType
                    ? donation.volunteerActionType.name
                    : "/",
                }))}
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
    </div>
  );
};

export default DonationPage;
