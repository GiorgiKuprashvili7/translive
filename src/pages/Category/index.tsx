import { useState } from "react";
import GridView from "../../components/general/GridView";
import Modal from "../../components/general/Modal";
import Input from "../../components/general/Input";
import SingleSelect from "../../components/general/SingleSelect";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const [selectedFruit, setSelectedFruit] = useState("apple");

  const handleFruitChange = (value: string) => {
    setSelectedFruit(value);
  };

  return (
    <div>
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
        defaultValue={selectedFruit}
        onChange={handleFruitChange}
      />

      {/* <GridView /> */}
      <Modal
        title="Add New Category"
        isOpen={isOpen}
        // onClose={() => setIsOpen(false)}
        onClose={() => alert("modal closed")}
        content={<input />}
        actions={
          <>
            <button>ragaca</button> <button>ragaca2</button>
          </>
        }
      />
    </div>
  );
};

export default Category;
