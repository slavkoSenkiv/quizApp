import { useState } from "react";
import QUESTIONS from "../../questions";
import Question from "./Question";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const currentQuestionIndex = answers.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }
  return (
    <section id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </section>
  );
}
