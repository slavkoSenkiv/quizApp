import Header from "./components/Header";
import Quiz from "./components/QuestionOverview";

/* 
  header
  quizOverview
    summary 
    OR
    question
      countdown
        progres
      answers
        ul>li>btn
    countdown

*/

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}
