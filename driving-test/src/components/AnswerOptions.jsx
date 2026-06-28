import Button from "./ui/Button";
import styles from "./styles/AnswerOptions.module.css";

function AnswerOptions({ options, selected, dispatch }) {
  const handleOptionClick = (optionSelected) => {
    dispatch({
      type: "UPDATE_ANSWER",
      value: optionSelected,
    });
    dispatch({
      type: "NEXT",
    });
  };
  return (
    <div className={styles.options}>
      {options.map((val, i) => (
        <Button
          onClick={() => handleOptionClick(i)}
          type={i === selected ? "selected" : "outline"}
          key={val}
        >
          {val}
        </Button>
      ))}
    </div>
  );
}

export default AnswerOptions;
