import { useState, useCallback } from "react";
import QUESTIONS from "../../questions";
import Question from "./Question";
import Summary from "./Summary";

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
  const [answers, setAnswers] = useState([]);
  const currentQuestionIndex = answers.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
    console.log(answers);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={answers}/>
    );
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
