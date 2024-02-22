import CountDown from "./CountDown";
import Answers from "./Answers";

/*
answers   
  countdown
    progres
  answers
    ul>li>btn       
*/

export default function Question({
  questionText,
  questionAnswers,
  onSelectAnswer,
  onSkipAnser,
}) {
  let timer = 3000;
  setTimeout(()=>{
    onSkipAnser
  }, timer)


  return (
    <div id="question-overview">
      <CountDown />
      <h2>{questionText}</h2>
      <Answers 
        answers={questionAnswers} 
        onSelect={onSelectAnswer} 
      />
    </div>
  );
}
