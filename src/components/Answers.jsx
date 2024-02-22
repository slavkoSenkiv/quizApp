export default function Answers({ answers, onSelect }) {
  const shuffledAnswers = [...answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <ul id="answers">
      {shuffledAnswers.map((answer, index) => (
        <li key={index} className="answer">
          <button onClick={() => onSelect(answer)}>
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
