import axios from "axios";

// even though fetch data have correct and incorrect answer seperate, prefer for it to stick together to manipulate it later (map through it for visual )
// this must be exactly the same as data get back from endpoint
export type QuestionInstance = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string; // the description of the quiz
  type: string;
};

export type QuestionState = QuestionInstance & { answer: string[] }; // FIX wtf is this called ???

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

type fetchQuestionType = (
  amount: number,
  difficulty: Difficulty
) => Promise<void>;

export const fetchQuestion: fetchQuestionType = async (
  amount: number,
  difficulty: Difficulty
) => {
  // the URL link get from the free quiz API
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=15&difficulty=${difficulty}&type=multiple`;
  const data = await axios.get(endpoint); // FIX, should data have type at here ???
  console.log(data);
};
