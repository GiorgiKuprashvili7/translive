import { LuTrash } from "react-icons/lu";
import Input from "../../../../components/general/Input";
import styles from "./styles.module.scss";
import moment from "moment";
import { users } from "../../../../Data/users";
import { DiVim } from "react-icons/di";
import Button from "../../../../components/general/Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { categories } from "../../../../Data";

const MembersTable = () => {
  const { id } = useParams();

  const category = categories.find((o) => o.id === Number(id));
  const categoryUsers = users.filter((o) => category?.userIds.includes(o.id));
  const [page, setPage] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState(categoryUsers);
  const startingIndex = page * 10;
  const endingIndex = Math.min(startingIndex + 14, users.length - 1);
  const navigate = useNavigate();

  return (
    <>
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

              {filteredUsers.slice(page * 10, (page + 1) * 10).map((o) => (
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
                    <button
                      onClick={() => navigate(`/category/${id}?userid=${o.id}`)}
                    >
                      edit user
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {categoryUsers.length && (
        <div className={styles.pagination}>
          <span>
            Show{" "}
            <b>
              {startingIndex + 1}-
              {categoryUsers.length > 10
                ? endingIndex + 1
                : categoryUsers.length}
            </b>{" "}
            of <b>{categoryUsers.length}</b>
          </span>
          <Button
            disabled={page === 0}
            text="previews"
            startIcon={<HiChevronLeft />}
            onClick={() => setPage((prev) => prev - 1)}
          />
          <Button
            disabled={page >= Math.ceil(categoryUsers.length / 10) - 1}
            text="next"
            endIcon={<HiChevronRight />}
            onClick={() => setPage((prev) => prev + 1)}
          />
        </div>
      )}
    </>
  );
};

export default MembersTable;
