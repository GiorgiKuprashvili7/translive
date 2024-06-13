import { LuTrash } from "react-icons/lu";
import Input from "../../../../components/general/Input";
import styles from "./styles.module.scss";
import moment from "moment";
import { users } from "../../../../Data/users";
import { DiVim } from "react-icons/di";
import Button from "../../../../components/general/Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const MembersTable = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.tableWrapper}>
        <table className={styles.table} cellSpacing="0">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  placeholder="Search"
                  className={styles.checkbox}
                />
              </th>
              <th>name</th>
              <th>id</th>
              <th>birth Date</th>
              <th colSpan={2}>status</th>
            </tr>
          </thead>

          <tbody>
            <tr className={styles.searchInputsRow}>
              <td></td>
              <td>
                <div className={styles.searchWrapper}>
                  <Input
                    type="text"
                    placeholder="Search"
                    className={styles.search}
                  />
                </div>
              </td>
              <td>
                <div className={styles.searchWrapper}>
                  <Input
                    type="text"
                    placeholder="Search"
                    className={styles.search}
                  />
                </div>
              </td>
              <td>
                <div className={styles.searchWrapper}>
                  <Input
                    type="text"
                    placeholder="Search"
                    className={styles.search}
                  />
                </div>
              </td>
              <td colSpan={2}>
                <div className={styles.searchWrapper}>
                  <Input
                    type="text"
                    placeholder="Search"
                    className={styles.search}
                  />
                  <LuTrash className={styles.deleteBtn} />
                </div>
              </td>
            </tr>

            {users.map((o) => (
              <tr className={styles.itemRow}>
                <td>
                  <input
                    type="checkbox"
                    placeholder="Search"
                    className={styles.checkbox}
                  />
                </td>
                <td>
                  <div className={styles.nameColumn}>
                    <img src={o.imageUrl} alt="" />
                    <div>
                      <h4>{o.fullName}</h4>
                      <p>{o.email}</p>
                    </div>
                  </div>
                </td>
                <td>{o.id}</td>
                <td>{moment(o.birthDate).format("DD/MM/YYYY")}</td>
                <td>
                  <div
                    className={`${styles.status} ${
                      "status-" + o.status.toLowerCase()
                    }`}
                  >
                    <span></span> {o.status}
                  </div>
                </td>
                <td className={styles.editUser}>
                  <button>edit user</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <span>page N 1</span>
        <Button text="previews" startIcon={<HiChevronLeft />} />
        <Button text="next" endIcon={<HiChevronRight />} />
      </div>
    </div>
  );
};

export default MembersTable;
