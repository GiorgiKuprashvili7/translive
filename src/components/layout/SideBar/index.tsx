import { Link } from "react-router-dom";
import { SidebarDataItem } from "../../../interfaces/ISidebarData";
import { useState } from "react";
import styles from "./styles.module.scss";
import { SidebarData } from "./SidebarData";

type SideBarProps = {
  isOpen: boolean;
};
const SideBar = ({ isOpen }: SideBarProps) => {
  return (
    <>
      <nav>
        <div className={`${styles.sidebarNav} ${isOpen ? styles.active : ""}`}>
          <div className={styles.sidebarWrap}>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;

// SubMenu

type SubMenuProps = {
  item: SidebarDataItem;
};

const SubMenu = ({ item }: SubMenuProps) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        to={item.path}
        onClick={item.subNav && showSubnav}
        className={styles.sidebarLink}
      >
        <div>
          {item.icon}
          <span className={styles.sidebarLabel}>{item.title}</span>
        </div>
        <div>{item.subNav && subnav ? "<" : item.subNav ? ">" : null}</div>
      </Link>
      {subnav &&
        item.subNav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} className={styles.dropdownLink}>
              {item.icon}
              <span className={styles.sidebarLabel}>{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};
