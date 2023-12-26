import styles from "./index.module.css";

const Title = (props) => {
  const { children, color = "black" } = props;
  return <div className={`${styles.title} ${styles[color]}`}>{children}</div>;
};

export default Title;
