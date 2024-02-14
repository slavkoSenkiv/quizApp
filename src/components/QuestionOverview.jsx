import { useEffect, useState } from "react";
import { questions } from "./../../questions";
import CountDown from "./CountDown";

const TIMER = 3000;
const FREEZE = 500;

export default function QuestionOverview({ quizStep, setQuizStep, setScore }) {
  const quizStepObj = questions[quizStep];
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [buttonClass, setButtonClass] = useState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeout(() => {
        if (selectedAnswer !== quizStepObj.correctAnswerIndex) {
          setButtonClass("wrong");
        } else {
          setButtonClass("correct");
          setScore((prevScore) => prevScore + 1);
        }
      }, TIMER - FREEZE);

      setQuizStep((prevQuizStep) => prevQuizStep + 1);
      setButtonClass();
    }, TIMER);

    return () => clearTimeout(timeoutId);
  }, [quizStep]);

  function handleSelectAnswer(index) {
    setSelectedAnswer(index);
    setButtonClass("selected");
  }

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

/* 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (selectedAnswer !== quizStepObj.correctAnswerIndex) {
        setButtonClass("wrong");
        setTimeout(() => {
          setQuizStep((prevQuizStep) => prevQuizStep + 1);
          setButtonClass();
        }, FREEZE);
      } else {
        setQuizStep((prevQuizStep) => prevQuizStep + 1);
        setButtonClass();
      }
    }, TIMER);

    return () => clearTimeout(timeoutId);
  }, [quizStep]); 
  
  function handleSelectAnswer(index) {
    setSelectedAnswer(index);

    if (index === quizStepObj.correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1);
      setButtonClass("correct");
      clearTimeout(timeoutId);
      setTimeout(() => {
        setQuizStep((prevQuizStep) => prevQuizStep + 1);
        setButtonClass();
      }, FREEZE);
    } else {
      setButtonClass("selected");
    }
  }
  */
