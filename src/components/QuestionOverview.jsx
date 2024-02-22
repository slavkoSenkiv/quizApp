import { useState } from "react";
import QUESTIONS from "../../questions";
import Summary from "./Summary";
import Question from "./Question";

/* 
quizOverview
    summary 
    ||
    question
      countdown
        progres
      answers
        ul>li>btn 
*/

export default function Quiz() {
  const [answers, setAnswers] = useState([]); //(["", "","","","","","" ]);
  const currentQuestionIndex = answers.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(answer) {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
    console.log(answers);
  }

  function handleSkipAnswer() {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, null];
    });
  }

  if (quizIsComplete) {
    return <Summary />;
  }

  return (
    <section id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </section>
  );
}
