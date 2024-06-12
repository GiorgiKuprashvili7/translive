import { urlToBreadcrumbList } from "../../../utilities";
import styles from "./styles.module.scss";
import { useLocation } from "react-router";
import { HiChevronRight, HiHome } from "react-icons/hi";

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumbData = urlToBreadcrumbList(location.pathname);

  return (
    <div className={styles.breadcrumb}>
      {breadcrumbData.map((o, i) => (
        <>
          {i === 0 ? (
            <HiHome className={styles.homeIcon} />
          ) : (
            <HiChevronRight className={styles.rightIcon} />
          )}
          <span>{o}</span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
