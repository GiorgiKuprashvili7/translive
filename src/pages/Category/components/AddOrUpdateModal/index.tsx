import styles from "./styles.module.scss";
import Input from "../../../../components/general/Input";
import Modal from "../../../../components/general/Modal";
import MultiSelect from "../../../../components/general/MultiSelect";
import TextArea from "../../../../components/general/TextArea";
import Button from "../../../../components/general/Button";

type propsType = {
  isOpen: boolean;
  onClose: () => void;
};

const AddOrUpdateModal = ({ isOpen, onClose }: propsType) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option123", label: "Option 1" },
    { value: "option2asd", label: "Option 2" },
    { value: "option3fgds", label: "Option 3" },
    { value: "option1fhdg", label: "Option 1" },
    { value: "option2asd", label: "Option 2" },
    { value: "option3asd", label: "Option 3" },
    { value: "option3fgasdds", label: "Option 3" },
    { value: "option1fashdg", label: "Option 1" },
    { value: "option2aqsd", label: "Option 2" },
    { value: "option3aassd", label: "Option 3" },
  ];

  return (
    <Modal
      title="Add New Category"
      isOpen={isOpen}
      // onClose={() => setIsOpen(false)}
      onClose={onClose}
      content={
        <div className={styles.mainWrapper}>
          <div className={styles.twoInput}>
            <Input
              type="text"
              label="Category Name"
              value=""
              onChange={() => {}}
            />
            <Input
              type="text"
              label="Category Name"
              value=""
              onChange={() => {}}
            />
          </div>
          <MultiSelect label="members" options={options} />
          <TextArea label="short description" />
        </div>
      }
      actions={
        <div className={styles.buttonsWrapper}>
          <Button text="cencel" variant="secondary" />
          <Button text="Save" />
        </div>
      }
    />
  );
};

export default AddOrUpdateModal;
