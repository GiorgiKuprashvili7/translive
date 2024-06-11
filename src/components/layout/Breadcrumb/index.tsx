import styles from "./styles.module.scss";

import { useLocation } from "react-router";

const urlToBreadcrumbList = (url: string) => {
  const list = url.split("/");
  list[0] = "home";
  return list;
};

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumbData = urlToBreadcrumbList(location.pathname);

  return (
    <div className={styles.breadcrumb}>
      {breadcrumbData.map((o) => (
        <>
          / <span>{o}</span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
