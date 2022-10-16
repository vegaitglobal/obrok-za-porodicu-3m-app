import globalClasses from "../../../../constants/GlobalStyle.module.scss";
import OPPrimaryButton from "../../atoms/primaryButton/OPPrimaryButton";
import CustomModal from "../customModal/CustomModal";

interface IOPDeleteModalProps {
  onDelete: () => void;
  onHide: () => void;
  show: boolean;
  type: string;
}

const OPDeleteModal: React.FC<IOPDeleteModalProps> = ({
  onDelete,
  onHide,
  show,
  type,
}) => {
  return (
    <CustomModal show={show} onHide={onHide}>
      <p className={globalClasses["modal-content-paragraph"]}>Da li ste sigurni da želite da obrišete {type} ?</p>
      <div className={globalClasses["modal-footer-ctas"]}>
        <OPPrimaryButton text={"Potvrdi"} onClick={onDelete} />
        <OPPrimaryButton text={"Otkaži"} onClick={onHide} />
      </div>
    </CustomModal>
  );
};

export default OPDeleteModal;
