import SingleSelect from "../../components/general/SingleSelect";
import MultiSelect from "../../components/general/MultiSelect";
import DatePicker from "../../components/general/DatePicker";
import Button from "../../components/general/Button";
import { MdInfo } from "react-icons/md";
import TextArea from "../../components/general/TextArea";
import Modal from "../../components/general/Modal";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Input from "../../components/general/Input";
import AddOrUpdateModal from "./components/AddOrUpdateModal";
import { Id, ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../components/general/PageTitle";
import CategoryList from "./components/CategoryList";

import { categories } from "../../Data";
import { ICategory } from "../../interfaces/ICategory";
import { Msg } from "../../components/general/Toast";

const Category = () => {
  const [category, setCategory] = useState<ICategory | null>(null);

  const [searchInput, setSearchInput] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    setFilteredCategories(() => {
      if (searchInput.length) {
        return categories.filter((o) =>
          o.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        return categories;
      }
    });
  }, [searchInput]);

  return (
    <>
      <div className={styles.pageTop}>
        <PageTitle text="category" />
        <Input
          className={styles.searchInput}
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for users"
        />
      </div>

      <CategoryList
        data={filteredCategories}
        onEditClick={(o) => setCategory(o)}
      />

      {/* <Button text="Save" endIcon={<MdInfo />} onClick={notify} /> */}
      {/* <Button
        text="Save"
        endIcon={<MdInfo />}
        onClick={() => setIsOpen(true)}
      /> */}
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

      <ToastContainer />
      <AddOrUpdateModal
        data={category}
        isOpen={Boolean(category)}
        onClose={() => setCategory(null)}
      />
    </>
  );
};

export default Category;
