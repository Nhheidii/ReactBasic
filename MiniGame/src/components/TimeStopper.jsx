import { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimeStopper({ title, targetTime }) {
  const [timeStart, setTimeStart] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const timer = useRef();
  const dialogRefer = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const score = Math.floor((1 - timeRemaining / (targetTime * 1000)) * 100);

  // function clickHandle() {
  //   timer.current = setTimeout(() => {
  //     // setTimeExpired(true);
  //     dialogRefer.current.showModal();
  //     //   dialogRefer.current.open();
  //   }, targetTime * 1000);

  //   setTimeStart(true);
  // }
  function clickHandle() {
    timer.current = setInterval(() => {
      // setTimeExpired(true);
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      // dialogRefer.current.showModal();
      //   dialogRefer.current.open();
    }, 10);

    setTimeStart(true);
  }
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRefer.current.showModal();
  }
  function handleStop() {
    clearInterval(timer.current);
    dialogRefer.current.showModal();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModel
        reference={dialogRefer}
        result={"won"}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        reset={handleReset}
        score={score}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p> {timeExpired ? "you loser" : ""} </p>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : clickHandle}>
          {timerIsActive ? "Stop" : "Start"}
        </button>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Timer inactive" : "Time is running"}
        </p>
      </section>
    </>
  );
}
