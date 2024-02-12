import { useState } from "react";
import { questions } from "./../../questions";
import CountDown from "./CountDown";

const TIMER = 3000;

export default function QuestionOverview({ quizStep, setQuizStep }) {
  const quizStepObj = questions[quizStep];
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [buttonClass, setButtonClass] = useState();

  function handleSelectAnswer(index) {
    setSelectedAnswer(index);

    if (index === quizStepObj.correctAnswerIndex) {
      setButtonClass("correct");
      setTimeout(() => {
        setQuizStep((prevQuizStep) => prevQuizStep + 1);
        setSelectedAnswer(-1);
        setButtonClass();
      }, 1000);
    } else {
      setButtonClass("selected");
    }
  }

  setTimeout(() => {
    setQuizStep((prevQuizStep) => prevQuizStep + 1);
    setSelectedAnswer(-1);
    setButtonClass("wrong");
  }, TIMER);

  return (
    <section id="quiz">
      <div id="question">
        <CountDown timer={TIMER} />
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
