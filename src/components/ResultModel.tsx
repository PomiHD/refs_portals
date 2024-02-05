import { forwardRef, Ref } from "react";

interface ResultModelProps {
  result: string;
  targetTime: number;
}

/**
 * A modal to display the result of the challenge
 * @param result - The result of the challenge
 * @param targetTime - The target time of the challenge
 * @param ref - A reference to the dialog element
 * @return {*} - The result modal
 */
const ResultModel = forwardRef(function ResultModel(
  { result, targetTime }: ResultModelProps,
  ref: Ref<HTMLDialogElement>,
) {
  return (
    <dialog ref={ref} className={"result-modal"}>
      <h2>Your{result}</h2>
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
});
export default ResultModel;
