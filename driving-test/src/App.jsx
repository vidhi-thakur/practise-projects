import "./App.css";
import ProgressBar from "./components/Progressbar";
import Title from "./components/Title";
import Quiz from "./components/Quiz";
import { useReducer } from "react";
import { quizReducer } from "./state/quizReducer";
import { drivingTestQuestions } from "./data/test";

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

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "NEXT",
          });
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "PREV",
          });
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_ANSWER",
            value: 1,
          });
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_ANSWER",
            value: 2,
          });
        }}
      >
        2
      </button>

      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_ANSWER",
            value: 3,
          });
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "SUBMIT",
          });
        }}
      >
        submit
      </button>

      <ProgressBar />
      <Title />
      <Quiz currQuestion={state.currQuestion} dispatch={dispatch} />
    </>
  );
}

export default App;
