import React, { useState } from "react";

import { fetchQuestion, Difficulty } from "./common/API";
import QuestionCard from "./components/QuestionCard";

type startAppType = () => Promise<void>;
type checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => void;
type nextQuestion = () => void;

const App: React.FC = () => {
  // Constants
  const TOTAL_QUESTION = 10;

  // hooks
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuestion(TOTAL_QUESTION, Difficulty.EASY);

  // when start the app, call the api from here
  const startApp: startAppType = async () => {
    console.log("dang chay, dmm");
  };

  //
  const checkAnswer: checkAnswer = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("vua an chuot vao 1 btn nao do");
  };

  //
  const nextQuestion: nextQuestion = () => {
    console.log("cau hoi tiep theo");
  };

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startApp}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading questions...</p>
      {/* <QuestionCard
        questionNr={num + 1}
        totalQuestion={TOTAL_QUESTION}
        description={questions[num].description}
        answers={questions[num].answers}
        userAnswer={userAnswers ? userAnswers[num] : "User did not give answer"}
        callback={checkAnswer}
      ></QuestionCard> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
