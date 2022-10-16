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
      <p className={globalClasses["modal-content-paragraph"]}>Are you sure you want to delete {type} ?</p>
      <div className={globalClasses["modal-footer-ctas"]}>
        <OPPrimaryButton text={"Yes"} onClick={onDelete} />
        <OPPrimaryButton text={"Cancel"} onClick={onHide} />
      </div>
    </CustomModal>
  );
};

export default OPDeleteModal;
