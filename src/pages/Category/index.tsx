import { useState } from "react";
import GridView from "../../components/general/GridView";
import Modal from "../../components/general/Modal";
import Input from "../../components/general/Input";
import SingleSelect from "../../components/general/SingleSelect";
import MultiSelect from "../../components/general/MultiSelect";
import DatePicker from "../../components/general/DatePicker";
import Button from "../../components/general/Button";
import { MdInfo } from "react-icons/md";
import AddOrUpdateModal from "./components/AddOrUpdateModal";
import TextArea from "../../components/general/TextArea";

const Category = () => {
  const [isOpen, setIsOpen] = useState(true);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const [selectedFruit, setSelectedFruit] = useState("apple");

  const handleFruitChange = (value: string) => {
    setSelectedFruit(value);
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const options2 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option123", label: "Option 1" },
    { value: "option2asd", label: "Option 2" },
    { value: "option3fgds", label: "Option 3" },
    { value: "option1fhdg", label: "Option 1" },
    { value: "option2asd", label: "Option 2" },
    { value: "option3asd", label: "Option 3" },
    // Add more options as needed
  ];

  // Define a function to handle changes to the selected values
  const handleMultiSelectChange = (values: string[]) => {
    // Handle the selected values change here
    console.log("Selected values:", values);
  };

  return (
    <div>
      <AddOrUpdateModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Button
        text="Save"
        endIcon={<MdInfo />}
        onClick={() => setIsOpen(true)}
      />
      {/* <TextArea label="rame" value="" onChange={() => {}} />
      <DatePicker
        label="Date "
        value=""
        onChange={() => {}}
        placeholder="birth"
      />

      <Input
        type="text"
        label="Full Name"
        value=""
        onChange={() => {}}
        placeholder="email"
      />
      <Input
        type="text"
        label="email"
        placeholder="email"
        value="Giorga"
        onChange={() => {}}
      />
      <Input
        type="text"
        label="email"
        placeholder="email"
        value="Giorga"
        onChange={() => {}}
        disabled={true}
      />
      <SingleSelect
        name="fruit"
        label="Select a Fruit"
        options={options}
        // defaultValue={selectedFruit}
        onChange={handleFruitChange}
      />

      <MultiSelect
        label="Select Options"
        options={options2}
        // defaultValue={} // Optional
        onChange={handleMultiSelectChange} // Optional
        disabled={false} // Optional
      />
      <GridView />

      <Button
        text="Saveasdasasdasd"
        variant="transparent"
        startIcon={<MdInfo />}
        endIcon={<MdInfo />}
      />
      <Button text="Save" variant="transparent" />
      <Button text="Save" />
      <Button text="Save" variant="secondary" />
      <Button text="Save" variant="primary-danger" />
      <Button text="Save" variant="secondary-danger" />
     */}
    </div>
  );
};

export default Category;
