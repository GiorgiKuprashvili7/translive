import { useBreadcrumbList } from "../../../utilities";
import styles from "./styles.module.scss";
import { HiChevronRight, HiHome } from "react-icons/hi";

const Breadcrumb = () => {
  const breadcrumbData = useBreadcrumbList();
  console.log(breadcrumbData);
  return (
    <div className={styles.breadcrumb}>
      {breadcrumbData.map((o, i) => (
        <>
          {i === 0 && <HiHome className={styles.homeIcon} />}
          {i > 0 && <HiChevronRight className={styles.rightIcon} />}

          <span>{o}</span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
