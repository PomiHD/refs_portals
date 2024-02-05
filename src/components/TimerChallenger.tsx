import { useRef, useState } from "react";
import ResultModel, {ResultModelHandles} from "./ResultModel";

/**
 * A timer challenge component
 * @param title - The title of the challenge
 * @param targetTime - The target time of the challenge
 * @return {*} - The timer challenge component
 */
export default function TimerChallenger({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  
  /** @type {React.MutableRefObject<NodeJS.Timeout | null>}
   * A reference to the timer
   */
  const timer = useRef<NodeJS.Timeout | null>();
  /** @type {React.MutableRefObject<HTMLDialogElement | null>}
   * A reference to the dialog element
   */
  const dialog = useRef<ResultModelHandles | null>();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current?.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModel ref={dialog} result="lost" targetTime={targetTime} />
      <section className={"challenge"}>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className={"challenge-time"}>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running..." : "Timer inactive!"}
        </p>
      </section>
    </>
  );
}
