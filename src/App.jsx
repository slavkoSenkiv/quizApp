import { useState, useEffect } from "react";
import { questions } from "../questions";
import Header from "./components/Header";
import QuestionOverview from "./components/QuestionOverview";
import Summary from "./components/Summary";

function App() {
  const [quizStep, setQuizStep] = useState(0);

  return (
    <>
      <Header />
      {quizStep < questions.length ? (
        <QuestionOverview 
          quizStep={quizStep} 
          setQuizStep={setQuizStep}/>
      ) : (
        <Summary />
      )}
    </>
  );
}

export default App;
