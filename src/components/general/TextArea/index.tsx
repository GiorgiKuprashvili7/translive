import styles from "./styles.module.scss";

type propsType = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

const TextArea = ({ label, value, onChange, disabled = false }: propsType) => {
  return (
    <div className={styles.wrapper}>
      {label && <span>{label}</span>}
      <textarea value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
};

export default TextArea;
