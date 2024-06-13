import styles from "./styles.module.scss";
import logo from "../../../assets/Logo.svg";
import { HiBell, HiViewGrid, HiMenuAlt2 } from "react-icons/hi";

type propsType = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: propsType) => {
  return (
    <header>
      <div className={styles.leftContainer}>
        <HiMenuAlt2 className={styles.icon} onClick={onMenuClick} />
        <img src={logo} alt="translive logo" />
      </div>

      <div className={styles.rightContainer}>
        <HiBell className={styles.icon} />
        <HiViewGrid className={styles.icon} />
        <img
          className={styles.userImage}
          src="https://img.freepik.com/free-photo/close-up-portrait-man-looking-camera-outdoors_23-2148283854.jpg?t=st=1718047505~exp=1718051105~hmac=4ec549c51400d7dafdb2d4e65f34b95fc66c4ab8a4d6a2e37810efa3d772eafb&w=1060"
          alt="user image"
        />
      </div>
    </header>
  );
};

export default Header;
