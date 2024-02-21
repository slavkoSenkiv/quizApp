import { useState } from "react";
import QUESTIONS from "../../questions";
import Question from "./Question";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const currentQuestionIndex = answers.length;

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
  return (
    <div id="quiz">
      <progress value="2" max="3" />
      <Question
        questionText={QUESTIONS[currentQuestionIndex].text}
        questionAnswers={QUESTIONS[currentQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
