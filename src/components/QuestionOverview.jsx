import { useState } from "react";
import { questions } from "./../../questions";

export default function QuestionOverview({ quizStep, setQuizStep }) {
  const quizStepObj = questions[quizStep];
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [buttonClass, setButtonClass] = useState();

  function handleSelectAnswer(index) {
    setSelectedAnswer(index);
    if (index === quizStepObj.correctAnswerIndex) {
      setButtonClass("correct");
      setQuizStep((prevQuizStep) => prevQuizStep + 1);
    } else {
      setButtonClass("selected");
    }
  }

  return (
    <section id="quiz">
      <div id="question">
        <progress value={2} max={3} />
        <h1>{quizStepObj.question}</h1>
        <ul id="answers">
          {quizStepObj.answers.map((question, index) => (
            <li key={index} className="answer">
              <button
                onClick={() => handleSelectAnswer(index)}
                className={selectedAnswer === index ? buttonClass : undefined}
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
