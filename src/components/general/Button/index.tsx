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
};

const Button = ({
  text,
  onClick,
  variant = "primary",
  type = "button",
  startIcon,
  endIcon,
}: propsType) => {
  return (
    <button
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
