export const quizReducer = (state, action, totalQuestions) => {
  let currQuestion = state.currQuestion;

  switch (action.type) {
    case "NEXT":
      if (state.currQuestion < totalQuestions - 1)
        currQuestion = currQuestion + 1;
      return {
        ...state,
        currQuestion,
      };
    case "PREV":
      if (state.currQuestion > 0) {
        currQuestion = currQuestion - 1;
      }
      return {
        ...state,
        currQuestion,
      };
    case "SUBMIT":
      return {
        ...state,
        isSubmitted: true
      };
    case "UPDATE_ANSWER": {
      const answers = [...state.answers].map((val, index) => {
        if (index === state.currQuestion) {
          return action.value;
        } else {
          return val;
        }
      });
      return {
        ...state,
        answers
      };
    }
    default:
      return {
        ...state,
      };
  }
};
