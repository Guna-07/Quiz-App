import React from 'react';
//Types
import { AnswerObject } from '../App'
//Styles


type props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<props>= ({
     question,
     answers, 
     callback, 
     userAnswer, 
     questionNr,
     totalQuestion,
}) => (
<div>
    <p className="number">
        Question: {questionNr} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
        {answers.map(answer => (
            <div key={answer}>
                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
            </div>
        ))}
    </div>
</div>
);

export default QuestionCard;