import { Link } from "react-router-dom";
import { SidebarDataItem } from "../../../interfaces/ISidebarData";
import { useState } from "react";
import styles from "./styles.module.scss";
import {
  SidebarData,
  StaticSidebarData,
  sidebarSettingsData,
} from "./SidebarData";
import {
  HiAdjustments,
  HiChevronDown,
  HiChevronUp,
  HiOutlineCog,
  HiOutlineGlobe,
} from "react-icons/hi";

type SideBarProps = {
  isOpen: boolean;
};
const SideBar = ({ isOpen }: SideBarProps) => {
  return (
    <nav>
      <div className={`${styles.sidebarNav} ${isOpen ? styles.active : ""}`}>
        <div className={styles.sidebarWrap}>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
        <div className={styles.divider}></div>
        <div className={`${styles.sidebarWrap} ${styles.staticRoutes}`}>
          {StaticSidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
        <div className={styles.footer}>
          {sidebarSettingsData.map((o) => (
            <Link to={o.path}>
              <o.icon />
            </Link>
          ))}
        </div>
      </div>
    </nav>
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
      <div onClick={item.subNav && showSubnav} className={styles.sidebarLink}>
        <div className={styles.IconAndLabel}>
          <Link to={item.path} className={styles.link}>
            <item.icon className={styles.itemIcon} />
            <span className={styles.sidebarLabel}>{item.title}</span>
          </Link>
        </div>

        {item.subNav && subnav ? (
          <HiChevronUp className={styles.Chevron} />
        ) : item.subNav ? (
          <HiChevronDown className={styles.Chevron} />
        ) : null}
      </div>
      {subnav &&
        item.subNav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} className={styles.dropdownLink}>
              <span className={styles.sidebarLabel}>{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};
