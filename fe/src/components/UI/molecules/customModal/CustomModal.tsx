import Modal from "react-bootstrap/Modal";
import styles from "./CustomModal.module.scss";
import "bootstrap/dist/css/bootstrap.css";

interface CustomModalProps {
  children?: React.ReactNode;
  onHide: () => void;
  show?: boolean;
  label?: string;
  size?: "sm" | "lg";
}

function CustomModal(props: CustomModalProps) {
  return (
    <Modal
      {...props}
      size={props.size ? props.size : "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={`${styles.border} ${styles.font}`} closeButton>
        <Modal.Title
          className={`${styles.border} ${styles.font}`}
          id="contained-modal-title-vcenter"
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.border} ${styles.font}`}>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
