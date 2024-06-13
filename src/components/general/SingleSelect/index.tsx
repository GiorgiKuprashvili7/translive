import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

type Option = {
  value: string;
  label: string;
};

type PropsType = {
  label?: string;
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

const SingleSelect = ({
  label,
  options,
  defaultValue,
  onChange,
  disabled = false,
}: PropsType) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
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
        <div className={styles.selectedValue}>
          {options?.find((option) => option.value === selectedValue)?.label
            ? options?.find((option) => option.value === selectedValue)?.label
            : "Select"}
        </div>
        <MdKeyboardArrowDown className={styles.arrow} />
        {isOpen && (
          <div className={styles.options}>
            {options?.map((option) => (
              <div
                key={option.value}
                className={styles.option}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleSelect;
