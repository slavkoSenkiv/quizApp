import Answers from "./Answers";

export default function Question({
  questionText,
  questionAnswers,
  onSelectAnswer,
  onSkipAnser,
}) {
  return (
    <div id="question-overview">
      <h2>{questionText}</h2>
      <Answers answers={questionAnswers} onSelect={onSelectAnswer} />
    </div>
  );
}
