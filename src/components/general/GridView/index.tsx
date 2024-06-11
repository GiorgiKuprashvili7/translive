import { categories, users } from "../../../Data";
import styles from "./styles.module.scss";

const GridView = () => {
  return (
    <div className={styles.gridView}>
      {categories.map((o) => (
        <div>
          {o.name}
          --------
          {o.userIds.map((o) => (
            <img
              className={styles.memberImage}
              src={users.find((user) => user.id === o)?.imageUrl}
              alt={users.find((user) => user.id === o)?.fullName}
            ></img>
          ))}
        </div>
      ))}

      {/* {users.map((o) => (
        <div>{o.fullName}</div>
      ))} */}
    </div>
  );
};

export default GridView;
