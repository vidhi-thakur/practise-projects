import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import Media from "./Media";
import Navigation from "./Navigation";
import QuizHeader from "./QuizHeader";
import styles from "./styles/Quiz.module.css";

function Quiz({ currQuestion, totalQuestions, testQuestions }) {
  const curr = testQuestions[currQuestion];
  return (
    <div className={styles.root}>
      <QuizHeader currQuestion={currQuestion} totalQuestions={totalQuestions} />
      <div className={styles.content}>
        <div className={styles.lhs}>
          <Question question={curr.question} />
          <AnswerOptions />
        </div>
        <div className={styles.rhs}>
          {curr.type === "video" || curr.type === "image" ? (
            <Media type={curr.type} video={curr.video} image={curr.image} />
          ) : null}
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Quiz;
