import { quizCompleteImg } from "../assets/quiz-complete";

export default function Summary({ restart }) {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number"></span>
          <span className="text"></span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text"></span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text"></span>
        </p>
      </div>
    </div>
  );
}
