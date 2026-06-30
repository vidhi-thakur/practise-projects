import Card from "./ui/Card";
import styles from "./styles/ResultScore.module.css";

function ResultScore({ score, totalQuestions }) {
  const totalScore = totalQuestions;
  const isPassed = score / totalQuestions > 0.4;
  return (
    <Card>
      <h3 className={isPassed ? styles.pass : styles.fail}>
        You {isPassed ? "Passed" : "Failed"}!
      </h3>
      <p className={styles.score}>
        You scored {score} out of {totalScore}
      </p>
    </Card>
  );
}

export default ResultScore;
