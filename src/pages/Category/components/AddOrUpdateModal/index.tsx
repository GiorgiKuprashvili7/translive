import styles from "./styles.module.scss";
import Input from "../../../../components/general/Input";
import Modal from "../../../../components/general/Modal";
import MultiSelect from "../../../../components/general/MultiSelect";
import TextArea from "../../../../components/general/TextArea";
import Button from "../../../../components/general/Button";
import { ICategory } from "../../../../interfaces/ICategory";
import SingleSelect from "../../../../components/general/SingleSelect";
import { users } from "../../../../Data";

type propsType = {
  isOpen: boolean;
  onClose: () => void;
  data: ICategory | null;
};

const AddOrUpdateModal = ({ data, isOpen, onClose }: propsType) => {
  const statusOptions = [
    { value: "ongoing", label: "ongoing" },
    { value: "finished", label: "finished" },
  ];

  const memberOptions = users.map((o) => ({
    value: o.fullName,
    label: o.fullName,
  }));

  return (
    <Modal
      title="Edit Category"
      isOpen={isOpen}
      onClose={onClose}
      content={
        <div className={styles.mainWrapper}>
          <div className={styles.twoInput}>
            <Input
              type="text"
              label="Category Name"
              value={data?.name}
              // onChange={() => {}}
            />
            <SingleSelect
              label="status"
              options={statusOptions}
              defaultValue={data?.status}
            />
          </div>
          <MultiSelect
            label="members"
            options={memberOptions}
            defaultValue={users
              .filter((o) => data?.userIds.includes(o.id))
              .map((o) => o.fullName)}
          />
          <TextArea label="short description" value={data?.description} />
        </div>
      }
      actions={
        <div className={styles.buttonsWrapper}>
          <div>
            <Button text="delete category" variant="primary-danger" />
          </div>
          <Button text="cencel" variant="secondary" />
          <Button text="Save" />
        </div>
      }
    />
  );
};

export default AddOrUpdateModal;
