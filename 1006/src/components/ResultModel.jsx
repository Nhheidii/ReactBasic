// import { useImperativeHandle, useRef } from "react";

export default function ResultModel({ result, targetTime, reference }) {
  //   const insideModal = useRef();
  //   useImperativeHandle(reference, () => {
  //     return {
  //       open() {
  //         insideModal.current.showModal();
  //       },
  //     };
  //   });

  return (
    <>
      <dialog ref={reference} className="result-modal">
        <h2> You {result} </h2>
        <p>
          Target time is: <strong> {targetTime} second </strong>
        </p>
        <p>
          You have <string> x second </string> left
        </p>
        <form method="dialog">
          <button> Close dialog </button>
        </form>
      </dialog>
    </>
  );
}
