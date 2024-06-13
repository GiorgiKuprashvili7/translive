import styles from "./styles.module.scss";
import { HiOutlineExclamation } from "react-icons/hi";

const NotImplemented = () => {
  return (
    <div className={styles.box}>
      <HiOutlineExclamation className={styles.icon} />
      <p>this page is not implemented</p>
    </div>
  );
};

export default NotImplemented;
