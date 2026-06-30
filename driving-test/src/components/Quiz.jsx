import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import Media from "./Media";
import Navigation from "./Navigation";
import QuizHeader from "./QuizHeader";
import styles from "./styles/Quiz.module.css";
import Card from "./ui/Card";

function Quiz({
  currQuestion,
  totalQuestions,
  testQuestions,
  answers,
  dispatch,
}) {
  const curr = testQuestions[currQuestion];
  return (
    <Card>
      <QuizHeader currQuestion={currQuestion} totalQuestions={totalQuestions} />
      <div className={styles.content}>
        <div className={styles.lhs}>
          <Question question={curr.question} />
          <AnswerOptions
            options={curr.options}
            selected={answers[currQuestion]}
            dispatch={dispatch}
          />
        </div>
        <div className={styles.rhs}>
          {curr.type === "video" || curr.type === "image" ? (
            <Media type={curr.type} video={curr.video} image={curr.image} />
          ) : null}
        </div>
      </div>
      <Navigation
        dispatch={dispatch}
        currQuestion={currQuestion}
        totalQuestions={totalQuestions}
      />
    </Card>
  );
}

export default Quiz;
