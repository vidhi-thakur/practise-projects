import styles from "./styles/AnswerResult.module.css";

function AnswerResult({ options, selected, correctAnswer }) {
  return (
    <div className={styles.root}>
      {options.map((val, i) => (
        <div
          className={styles.option}
          key={val}
          style={{
            borderColor: i === selected && "blue",
            backgroundColor:
              i === correctAnswer ? "green" : i === selected ? "red" : "",
          }}
        >
          {val}{" "}
          {i === correctAnswer && correctAnswer === selected && <span>✓</span>}
          {i === selected && correctAnswer !== selected && <span>✗</span>}
        </div>
      ))}
    </div>
  );
}

export default AnswerResult;
