import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

type Option = {
  value: string;
  label: string;
};

type PropsType = {
  label?: string;
  placeholder?: string;
  options: Option[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
  disabled?: boolean;
};

const MultiSelect = ({
  label,
  options,
  defaultValue,
  onChange,
  disabled = false,
  placeholder = "",
}: PropsType) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultValue || []
  );
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((val) => val !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues);

    if (onChange) {
      onChange(updatedValues);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && <span>{label}</span>}
      <div
        ref={selectRef}
        className={`${styles.selectContainer} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
        tabIndex={0}
      >
        <div className={styles.selectedValues}>
          {selectedValues.length > 0
            ? selectedValues
                .map(
                  (val) => options.find((option) => option.value === val)?.label
                )
                .join(", ")
            : `${placeholder}`}
        </div>
        <MdKeyboardArrowDown className={styles.arrow} />
        {isOpen && (
          <div className={styles.options}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles.option}
                onClick={() => handleOptionChange(option.value)}
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option.value)}
                  readOnly
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
