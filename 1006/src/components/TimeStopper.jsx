import { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimeStopper({ title, targetTime }) {
  const [timeStart, setTimeStart] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const timer = useRef();
  const dialogRefer = useRef();
  function clickHandle() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialogRefer.current.showModal();
      //   dialogRefer.current.open();
    }, targetTime * 1000);

    setTimeStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimeStart(false);
  }

  return (
    <>
      <ResultModel
        reference={dialogRefer}
        result={"won"}
        targetTime={targetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p> {timeExpired ? "you loser" : ""} </p>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timeStart ? handleStop : clickHandle}>
          {timeStart ? "Stop" : "Start"}
        </button>
        <p className={timeStart ? "active" : ""}>
          {timeStart ? "Timer inactive" : "Time is running"}
        </p>
      </section>
    </>
  );
}
