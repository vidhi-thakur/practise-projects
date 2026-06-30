import styles from "./styles/Explaination.module.css";
function Explaination({ text }) {
  return (
    <p className={styles.root}>
      <i>Explaination: {text}</i>
    </p>
  );
}

export default Explaination;
