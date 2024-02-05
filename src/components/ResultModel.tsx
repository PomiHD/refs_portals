export default function ResultModel({ result, targetTime }) {
  return (
    <dialog className={"result-modal"} open>
      <h2>Your won</h2>
      <p>
        The target time was <strong> {targetTime} </strong>
      </p>
      <p>
        You stopped the timer with <strong> X seconds left.</strong>
      </p>
      <form method={"dialog"}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
