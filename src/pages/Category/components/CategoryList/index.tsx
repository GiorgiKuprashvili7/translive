import { HiPencilAlt, HiPlusSm } from "react-icons/hi";
import { users } from "../../../../Data";
import styles from "./styles.module.scss";
import { ICategory } from "../../../../interfaces/ICategory";

type propsType = {
  data: ICategory[];
  onMembersClick?: (item: ICategory) => void;
  onEditClick?: (item: ICategory) => void;
  onAddClick?: () => void;
};

const CategoryList = ({
  data,
  onMembersClick = () => {},
  onEditClick = () => {},
  onAddClick = () => {},
}: propsType) => {
  return (
    <div className={styles.container}>
      {data?.map((o) => (
        <div className={styles.card}>
          <div className={styles.header}>
            <h4>{o.name}</h4>
            <HiPencilAlt
              className={styles.editIcon}
              onClick={() => onEditClick(o)}
            />
          </div>
          <p className={styles.description}>{o.description}</p>

          <div className={styles.footer}>
            <div
              className={styles.usersContainer}
              onClick={() => onMembersClick(o)}
            >
              {o.userIds.slice(0, 3).map((o) => (
                <img
                  src={users.find((user) => user.id === o)?.imageUrl}
                  alt={users.find((user) => user.id === o)?.fullName}
                ></img>
              ))}
              {o.userIds.length > 3 && <span>{o.userIds.length} Member</span>}
            </div>
            <div
              className={`${styles.status} ${
                "status-" + o.status.toLowerCase()
              }`}
            >
              {o.status}
            </div>
          </div>
        </div>
      ))}
      <div className={`${styles.card} ${styles.addCard}`} onClick={onAddClick}>
        <HiPlusSm />
      </div>
    </div>
  );
};

export default CategoryList;
