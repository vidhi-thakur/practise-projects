import styles from "./styles/Progressbar.module.css";
function Progressbar({ currQuestion, totalQuestions }) {
  const width = ((currQuestion + 1) / totalQuestions) * 100;
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
