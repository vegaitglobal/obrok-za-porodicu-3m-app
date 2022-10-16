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
      <div>Are you sure you want to delete {type} ?</div>
      <OPPrimaryButton text={"Yes"} onClick={onDelete} />
      <OPPrimaryButton text={"Cancel"} onClick={onHide} />
    </CustomModal>
  );
};

export default OPDeleteModal;
