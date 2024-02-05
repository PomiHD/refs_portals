import { useState } from "react";

export default function TimerChallenger({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  return (
    <section className={"challenge"}>
      <h2>{title}</h2>
      {timerExpired && <p>Time is up!</p>}
      <p className={"challenge-time"}>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running..." : "Time is up!"}
      </p>
    </section>
  );
}
