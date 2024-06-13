import styles from "./styles.module.scss";
import Input from "../../../../components/general/Input";
import Modal from "../../../../components/general/Modal";
import Button from "../../../../components/general/Button";
import SingleSelect from "../../../../components/general/SingleSelect";
import { users, categories } from "../../../../Data";
import DatePicker from "../../../../components/general/DatePicker";
import { useLocation, useNavigate, useParams } from "react-router";
import userDefaultImage from "../../../../assets/userDefaultImage.svg";
import moment from "moment";
import { useEffect, useState } from "react";
import { IUser } from "../../../../interfaces/IUser";

const AddOrUpdateModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const userId = searchParams.get("userid");
  const isAddModal = searchParams.get("addmodal");

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    setUser(users.find((o) => o.id === Number(userId)));
  }, [userId]);

  const category = categories.find((o) => o.id === Number(id));

  const statusOptions = [
    { value: "active", label: "active" },
    { value: "offline", label: "offline" },
  ];

  const categoryOptions = category
    ? [{ value: category.name, label: category.name }]
    : [];

  const formattedDate = moment.utc(user?.birthDate).format("YYYY-MM-DD");

  const [userInputDate, setUserInputDate] = useState(formattedDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputDate(e.target.value);
  };

  return (
    <Modal
      title={isAddModal ? "Add New Member" : "edit member"}
      isOpen={Boolean(userId) || Boolean(isAddModal)}
      onClose={() => {
        navigate(`/category/${id}`);
        // setUser(undefined);
      }}
      content={
        <div className={styles.mainWrapper}>
          <div className={styles.imageBox}>
            <img src={userId ? user?.imageUrl : userDefaultImage} alt="" />

            {userId ? (
              <Button text="update" variant="secondary" />
            ) : (
              <Button text="delete" variant="secondary-danger" />
            )}
          </div>
          <div className={styles.twoInput}>
            <Input
              label="full name"
              value={user?.fullName}
              // onChange={() => {}}
            />
            <Input
              type="email"
              label="mail"
              value={user?.email}
              // onChange={() => {}}
            />
          </div>
          <div className={styles.twoInput}>
            <SingleSelect
              disabled
              label="status"
              options={statusOptions}
              defaultValue={user ? user?.status : ""}
            />
            <SingleSelect
              disabled
              label="category"
              options={categoryOptions}
              defaultValue={category ? category.name : ""}
            />
          </div>
          <div className={styles.twoInput}>
            <Input disabled type="number" label="ID" value={user?.id} />
            <DatePicker
              label="Birth Date"
              value={userInputDate}
              onChange={handleChange}
            />
          </div>
        </div>
      }
      actions={
        <div className={styles.buttonsWrapper}>
          {/* if i have id in url show delete btn */}
          <div>
            <Button text="delete member" variant="primary-danger" />
          </div>
          <Button text="cencel" variant="secondary" />
          <Button text="Save" />
        </div>
      }
    />
  );
};

export default AddOrUpdateModal;
