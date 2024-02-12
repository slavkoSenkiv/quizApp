import { useState } from "react";

export default function CountDown({ timer }) {
  const [timeLeft, setTimeLeft] = useState(timer);
  console.log(timeLeft);
  /* setInterval(() => {
    setTimeLeft((prevTime) => (prevTime = prevTime - 10));
  }, 10); */

  return <progress value={timeLeft} max={timer} />;
}
