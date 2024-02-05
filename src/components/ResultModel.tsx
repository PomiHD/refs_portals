import { forwardRef, useImperativeHandle, useRef } from "react";

interface ResultModelProps {
  result: string;
  targetTime: number;
}

export interface ResultModelHandles {
  open: () => void;
}

/**
 *  forwardRef<T, P> usage
 *  This ordering is defined by the React type definitions for forwardRef:
 *  function forwardRef<T, P>(component: RefForwardingComponent<T, P>):
 *  (props: P & RefAttributes<T>) => ReactElement | null;
 * T represents the type of the ref object that the component will expose to its parent components.
 * This is the type of the methods or values that you want to be accessible via the ref.
 * P represents the type of the props that the component expects.
 *  e.g
 *  const MyComponent = forwardRef<MyComponentRefType, MyComponentProps>((props, ref)
 *            => {
 *            // Implementation...
 *            });
 */
const ResultModel = forwardRef<ResultModelHandles, ResultModelProps>(
  function ResultModel({ result, targetTime }, ref) {
    const dialog = useRef<HTMLDialogElement | null>();
    // useImperativeHandle is a hook that allows
    // you to customize the instance value that is exposed to parent components when using ref.
    useImperativeHandle(ref, () => {
      return {
        open() {
          /**
           * why there is a question mark after dialog.current
           * The ? in dialogRef.current?.open(); is called the optional chaining operator. It's a feature in JavaScript (and by extension, TypeScript)
           * that allows you to safely access deeply nested properties of an object without having to explicitly check each level for null or undefined.
           *
           * In the context of dialogRef.current?.open();, it means:
           *     If dialogRef.current exists (i.e., it is not null or undefined), then call the open() method on it.
           *     If dialogRef.current does not exist (i.e., it is null or undefined), then do nothing and do not throw an error.
           *
           * This operator is particularly useful in React when dealing with refs because there's a period during the component's lifecycle when the ref is not yet assigned (it's null).
           * This typically happens when the component has not yet mounted or if the conditional rendering results in the component not being rendered at all.
           * The optional chaining operator prevents a potential runtime error in these scenarios.
           */
          dialog.current?.showModal();
        },
      };
    });
    return (
      <dialog ref={dialog} className={"result-modal"}>
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
  },
);
export default ResultModel;
