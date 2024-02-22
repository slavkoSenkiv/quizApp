import Header from "./components/Header";
import Quiz from "./components/QuestionOverview";

/* 
app
  header
  quizOverview
    summary 
    ||
    question
      countdown
        progres
      answers
        ul>li>btn
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
