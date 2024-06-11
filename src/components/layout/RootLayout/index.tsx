import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Breadcrumb from "../Breadcrumb";
import Header from "../Header";
import { useState } from "react";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div>
      <Header onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <div className={styles.wrapper}>
        <SideBar isOpen={isMenuOpen} />
        <div className={styles.content}>
          <Breadcrumb />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
