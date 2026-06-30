import styles from "./styles/Card.module.css"

function Card({ children }) {
  return <div className={styles.root}>{children}</div>;
}

export default Card;
