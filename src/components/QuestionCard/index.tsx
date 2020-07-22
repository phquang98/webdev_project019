import React from "react";

type QuestionCardProps = {
  description: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userAnswer: any;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  description,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion
}: QuestionCardProps) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: description }}></p> {/* FIX */}
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

QuestionCard.displayName = "QuestionCard";
export default QuestionCard;
