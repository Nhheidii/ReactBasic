// import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModel({
  // result,
  targetTime,
  reference,
  remainingTime,
  reset,
  score,
}) {
  // const insideModal = useRef();
  // useImperativeHandle(reference, () => {
  //   return {
  //     open() {
  //       insideModal.current.showModal();
  //     },
  //   };
  // });
  const isTimeRemained = remainingTime <= 0;
  const leftTime = (remainingTime / 1000).toFixed(2);

  return createPortal(
    <dialog ref={reference} className="result-modal">
      <p>
        {isTimeRemained} : <h2> You have {leftTime} second left </h2> :
        <h2> You lost </h2>
      </p>
      <p>
        Your score is <strong> {score} </strong>
      </p>
      <p>
        Target time is: <strong> {targetTime} second </strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        <button> Close dialog </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
