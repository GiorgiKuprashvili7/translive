import { useState } from "react";
import styles from "./styles.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

type Option = {
  value: string;
  label: string;
};

type propsType = {
  name: string;
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
}: propsType) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0].value
  );

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsFocused(false);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`${styles.wrapper} ${isFocused ? styles.focused : ""}`}>
      {label && <span>{label}</span>}
      <select
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
        className=""
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <MdKeyboardArrowDown className={styles.arrow} />
    </div>
  );
};

export default SingleSelect;
