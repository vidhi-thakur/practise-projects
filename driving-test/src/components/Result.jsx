import Question from "./Question";
import ResultScore from "./ResultScore";
import Card from "./ui/Card";
import styles from "./styles/Result.module.css";
import AnswerResult from "./AnswerResult";
import Media from "./Media";
import Explaination from "./Explaination";

function Result({ score, totalQuestions, testQuestions, answers }) {
  return (
    <div className={styles.root}>
      <ResultScore score={score} totalQuestions={totalQuestions} />
      {testQuestions.map((curr, i) => (
        <Card key={curr.id}>
          <div className={styles.content}>
            <div className={styles.lhs}>
              <Question as="h3" question={curr.question} />
              <AnswerResult
                options={curr.options}
                selected={answers[i]}
                correctAnswer={curr.correctAnswer}
              />
              <Explaination text={curr.explanation} />
            </div>
            <div className={styles.rhs}>
              {curr.type === "video" || curr.type === "image" ? (
                <Media type={curr.type} video={curr.video} image={curr.image} />
              ) : null}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Result;
