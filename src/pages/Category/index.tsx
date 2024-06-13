import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Input from "../../components/general/Input";
import AddOrUpdateModal from "./components/AddOrUpdateModal";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../components/general/PageTitle";
import CategoryList from "./components/CategoryList";
import { categories } from "../../Data";
import { ICategory } from "../../interfaces/ICategory";
import { useNavigate } from "react-router";
import useToastNotification from "../../utilities/useToastNotification";
import Toast from "../../components/general/Toast";

const Category = () => {
  const [category, setCategory] = useState<ICategory | null>(null);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const { toast, showToast, closeToast } = useToastNotification();

  const onAddClick = () => {
    showToast(
      "Category Added",
      "You have successfully added the Tennis Players category to your list!",
      "success"
    );
  };

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
        onMembersClick={(o) => navigate(`/category/${o.id}`)}
        onAddClick={onAddClick}
      />

      <AddOrUpdateModal
        data={category}
        isOpen={Boolean(category)}
        onClose={() => setCategory(null)}
      />

      {toast && (
        <Toast
          title={toast.title}
          message={toast.message}
          type={toast.type}
          closeToast={closeToast}
        />
      )}
    </>
  );
};

export default Category;
