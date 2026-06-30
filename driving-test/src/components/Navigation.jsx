import Button from "./ui/Button";
import styles from "./styles/Navigation.module.css";

function Navigation({ dispatch, currQuestion, totalQuestions }) {
  const handleNext = () => {
    dispatch({
      type: "NEXT",
    });
  };

  const handlePrev = () => {
    dispatch({
      type: "PREV",
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "SUBMIT",
    });
  };
  return (
    <div className={styles.root}>
      <Button onClick={handlePrev}>Prev</Button>
      {currQuestion + 1 === totalQuestions ? (
        <Button onClick={handleSubmit}>Submit</Button>
      ) : (
        <Button onClick={handleNext}>Next</Button>
      )}
    </div>
  );
}

export default Navigation;
