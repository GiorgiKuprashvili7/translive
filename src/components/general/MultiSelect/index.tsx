import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

type Option = {
  value: string;
  label: string;
};

type PropsType = {
  name: string;
  label?: string;
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

  const handleDocumentClick = (e: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(e.target as Node) &&
      !(e.target as HTMLElement).classList.contains(styles.option)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      {label && <span>{label}</span>}
      <div
        ref={selectRef}
        className={`${styles.selectContainer} ${isOpen ? styles.open : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <div className={styles.selectedValues}>
          {selectedValues.length > 0
            ? selectedValues
                .map(
                  (val) => options.find((option) => option.value === val)?.label
                )
                .join(", ")
            : "Select"}
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
