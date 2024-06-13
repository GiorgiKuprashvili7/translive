import styles from "./styles.module.scss";
import { useState } from "react";
import { useParams } from "react-router";
import { categories } from "../../Data";
import PageTitle from "../../components/general/PageTitle";
import Input from "../../components/general/Input";
import MembersTable from "./components/MembersTable";
import Button from "../../components/general/Button";
import { HiDocumentDownload, HiPlusSm } from "react-icons/hi";
import SingleSelect from "../../components/general/SingleSelect";

const Members = () => {
  const statusOptions = [
    { value: "ongoing", label: "ongoing" },
    { value: "finished", label: "finished" },
  ];
  const { id } = useParams();
  const [category, setCategory] = useState(
    categories.find((o) => o.id === Number(id))
  );
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className={styles.pageTop}>
        <PageTitle text={category?.name} />
        <div className={styles.topBar}>
          <Input
            className={styles.searchInput}
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for users"
          />
          <div className={styles.selectWrapper}>
            <SingleSelect options={statusOptions} />
          </div>
          <Button
            text="export"
            variant="transparent"
            startIcon={<HiDocumentDownload />}
          />
          <Button text="add user" startIcon={<HiPlusSm />} />
        </div>
      </div>
      <MembersTable />
    </>
  );
};

export default Members;
