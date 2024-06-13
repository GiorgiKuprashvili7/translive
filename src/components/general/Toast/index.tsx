import {
  HiCheckCircle,
  HiInformationCircle,
  HiOutlineX,
  HiXCircle,
} from "react-icons/hi";
import styles from "./styles.module.scss";

type propsType = {
  title: string;
  message?: string;
  type?: "success" | "error" | "warning";
  closeToast?: () => void;
};

const Toast = ({ title, message, type, closeToast }: propsType) => {
  return (
    <div className={`${styles.box} ${type}`}>
      <div className={styles.header}>
        {type === "success" && <HiCheckCircle className={styles.icon} />}
        {type === "error" && <HiInformationCircle className={styles.icon} />}
        {type === "warning" && <HiXCircle className={styles.icon} />}
        <h6>{title}</h6>
        <HiOutlineX onClick={closeToast} className={styles.closeIcon} />
      </div>

      <p>{message}</p>
    </div>
  );
};

export default Toast;
