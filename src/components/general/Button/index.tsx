import styles from "./styles.module.scss";

type propsType = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "transparent"
    | "primary-danger"
    | "secondary-danger";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
};

const Button = ({
  text,
  onClick,
  variant = "primary",
  type = "button",
  startIcon,
  endIcon,
  disabled = false,
}: propsType) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`
      ${styles.btn} 
      ${variant === "primary" ? styles.primary : ""}
      ${variant === "secondary" ? styles.secondary : ""}
      ${variant === "transparent" ? styles.transparent : ""}
       ${variant === "primary-danger" ? styles.primaryDanger : ""}
      ${variant === "secondary-danger" ? styles.secondaryDanger : ""}
      `}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default Button;
