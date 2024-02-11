import { useState } from "react";
import { questions } from "./../../questions";
console.log(questions);
export default function QuestionOverview({ quizStep, setQuizStep }) {
  const question = questions[quizStep];
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  return (
    <section id="quiz">
      <div id="question">
        <progress value={2} max={3} />
        <h1>{question.question}</h1>
        <ul id="answers">
          {question.answers.map((question, index) => (
            <li key={index} className="answer">
              <button
                onClick={() => setSelectedAnswer(index)}
                className={
                  selectedAnswer === question.correctAnswerIndex ? "selected" : undefined
                }
              >
                {question}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
