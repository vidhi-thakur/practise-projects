import "./App.css";
import ProgressBar from "./components/Progressbar";
import Title from "./components/Title";
import Quiz from "./components/Quiz";
import { useReducer } from "react";
import { quizReducer } from "./state/quizReducer";
import { drivingTestQuestions } from "./data/test";
import Result from "./components/Result";

function App() {
  const initialState = {
    currQuestion: 0,
    answers: new Array(drivingTestQuestions.length).fill(null),
    isSubmitted: false,
  };

  const [state, dispatch] = useReducer(
    (s, a) => quizReducer(s, a, drivingTestQuestions.length),
    initialState
  );

  let score = 0;
  if (state.isSubmitted) {
    state.answers.map((val, i) => {
      if (drivingTestQuestions[i].correctAnswer === val) {
        score += 1;
      }
    }, 0);
  }

  return (
    <>
      <ProgressBar
        currQuestion={state.currQuestion}
        totalQuestions={drivingTestQuestions.length}
      />
      <Title />
      {state.isSubmitted ? (
        <Result score={score} totalQuestions={drivingTestQuestions.length} />
      ) : (
        <Quiz
          currQuestion={state.currQuestion}
          dispatch={dispatch}
          totalQuestions={drivingTestQuestions.length}
          testQuestions={drivingTestQuestions}
          answers={state.answers}
        />
      )}
    </>
  );
}

export default App;
