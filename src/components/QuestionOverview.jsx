import { useEffect, useState } from "react";
import { questions } from "./../../questions";
import CountDown from "./CountDown";

const FREEZE = 500;

function createEmptyClassHolderArr(originalArr) {
  return new Array(originalArr.length).fill("");
}

export default function QuestionOverview({ quizStep, setQuizStep, setScore }) {
  const TIMER = 3500;
  const quizStepObj = questions[quizStep];
  const [buttonClasses, setButtonClasses] = useState(
    createEmptyClassHolderArr(questions)
  );

  useEffect(() => {
    setTimeout(() => {
      setButtonClasses((prevButtonClasses) => {
        const updatedClasses = [...prevButtonClasses];
        const selectedAnswerIndex = updatedClasses.findIndex(
          (className) => className === "selected"
        );
        if (selectedAnswerIndex === quizStepObj.correctAnswerIndex) {
          updatedClasses[selectedAnswerIndex] = "correct";
          setScore((prevScore) => prevScore + 1);
        } else {
          updatedClasses[selectedAnswerIndex] = "wrong";
        }
        return updatedClasses;
      });
    }, TIMER - FREEZE);

    setTimeout(() => {
      setQuizStep((prevQuizStep) => prevQuizStep + 1);
      setButtonClasses(createEmptyClassHolderArr(questions))
    }, TIMER);
  }, [quizStep]);

  function handleSelectAnswer(index) {
    setButtonClasses(() => {
      const updatedClasses = createEmptyClassHolderArr(questions);
      updatedClasses[index] = "selected";
      return updatedClasses;
    });
  }

  return (
    <section id="quiz">
      <div id="question">
        <CountDown timer={TIMER} key={quizStep}/>
        <h1>{quizStepObj.question}</h1>
        <ul id="answers">
          {quizStepObj.answers.map((question, index) => (
            <li key={index} className="answer">
              <button
                onClick={() => handleSelectAnswer(index)}
                className={buttonClasses[index]}
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
