import ResultScore from "./ResultScore";
function Result({ score, totalQuestions }) {
  return (
    <div>
      <ResultScore score={score} totalQuestions={totalQuestions} />
    </div>
  );
}

export default Result;
