import styles from "./styles.module.scss";

type propsType = {
  text?: string;
};

const PageTitle = ({ text }: propsType) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default PageTitle;
