import styles from "./styles/QuizHeader.module.css";

function QuizHeader({ currQuestion, totalQuestions }) {
  return (
    <div className={styles.root}>
      <h3>
        Question {currQuestion + 1} of {totalQuestions}
      </h3>
      <p>Time left: 55:21</p>
    </div>
  );
}

export default QuizHeader;
