import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import Media from "./Media";
import Navigation from "./Navigation";
import QuizHeader from "./QuizHeader";
import styles from "./styles/Quiz.module.css";

function Quiz({ currQuestion, totalQuestions }) {
  return (
    <div className={styles.root}>
      <QuizHeader currQuestion={currQuestion} totalQuestions={totalQuestions} />
      <div className={styles.content}>
        <div className={styles.lhs}>
          <Question currQuestion={currQuestion} />
          <AnswerOptions />
        </div>
        <div className={styles.rhs}>
          <Media />
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Quiz;
