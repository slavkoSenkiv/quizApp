import { useState } from "react";
import Header from "./components/Header";
import QuestionOverview from "./components/QuestionOverview";

function App() {
  const [quizStep, setQuizStep] = useState(0);

  return (
    <>
      <Header />;
      <QuestionOverview quizStep={quizStep} setQuizStep={setQuizStep} />
    </>
  );
}

export default App;
