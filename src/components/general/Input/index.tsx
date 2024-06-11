import styles from "./styles.module.scss";

type propsType = {
  label?: string;
  placeholder?: string;
  type: "text" | "email" | "password" | "number";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const Input = ({
  type = "text",
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
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
