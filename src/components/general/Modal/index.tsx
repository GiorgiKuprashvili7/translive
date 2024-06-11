import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";

type propsType = {
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, title, content, actions }: propsType) => {
  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.title}>{title}</h3>
          <MdClose onClick={onClose} className={styles.closeBtn} />
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.actions}>{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
