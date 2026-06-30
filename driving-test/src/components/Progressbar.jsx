import styles from "./styles/Progressbar.module.css";
function Progressbar({ currQuestion, totalQuestions }) {
  const width = (currQuestion / totalQuestions) * 100;
  return (
    <div
      className={styles.root}
      style={{
        width: width + "%",
      }}
    ></div>
  );
}

export default Progressbar;
