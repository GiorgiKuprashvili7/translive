import styles from "./styles.module.scss";

type propsType = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const DatePicker = ({
  placeholder,
  label,
  value,
  onChange,
  disabled = false,
}: propsType) => {
  return (
    <div className={styles.wrapper}>
      {label && <span>{label}</span>}
      <input
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default DatePicker;
