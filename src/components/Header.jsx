import quizLogo  from "../assets/quiz-logo.png";
import { questions } from "../../questions";
export default function Header( {score}) {
  return (
    <header>
      <img src={quizLogo} alt="" />
      <h1>Reactoquiz</h1>
      <p>Score: {score}/{questions.length}</p>
    </header>
  );
}
