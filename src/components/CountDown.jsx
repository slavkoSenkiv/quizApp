import { useEffect, useState } from "react";

export default function CountDown({ timer }) {
  const [timeLeft, setTimeLeft] = useState(timer);
  console.log(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);
    return () => clearInterval(interval);
  }, [timer]);

  return <progress value={timeLeft} max={timer} />;
}
