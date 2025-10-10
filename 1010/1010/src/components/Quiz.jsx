import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../data.js";
import IMG from "../img/end.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  console.log("quiz component is render");
  const [userAnswers, setUserAnswers] = useState([]);
  //   const activeQuestionIndex = userAnswers.length;
  // const activeQuestionIndex =
  const [trueAns, setTrueAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [nullAns, setNullAns] = useState(0);
  const [answeredState, setAnsweredState] = useState("");
  //   const activeQuestionIndex =
  //     answeredState === "" ? userAnswers.length : userAnswers.length - 1;
  const activeQuestionIndex = userAnswers.length;

  const myRef = useRef(null);
  const handleClick = useCallback(
    // function (selectedAnswer) {
    //   setUserAnswers((prevAns) => {
    //     return [...prevAns, selectedAnswer];
    //   });
    //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //     setAnsweredState("answered");
    //     setTimeout(() => {}, 2000);
    //     setTrueAns((prev) => prev + 1);
    //     setTimeout(() => {
    //       myRef.classList.add("selected");
    //     }, 1000);
    //   } else if (
    //     (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[1]) |
    //     (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[2]) |
    //     (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[3])
    //   ) {
    //     setWrongAns((prev) => prev + 1);
    //   }
    //   setTimeout(() => {}, 1000);
    // }
        function (selectedAnswer) {
      setUserAnswers((prevAns) => {
        return [...prevAns, selectedAnswer];
      });
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnsweredState("answered");
        setTimeout(() => {}, 2000);
        setTrueAns((prev) => prev + 1);
        setTimeout(() => {
          myRef.classList.add("selected");
        }, 1000);
      } else if (
        (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[1]) |
        (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[2]) |
        (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[3])
      ) {
        setWrongAns((prev) => prev + 1);
      }
      setTimeout(() => {}, 1000);
    }
    ,

    // function (selectedAnswer) {
    // //   setTimeout((selectedAnswer) => {
    // //     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    // //       myRef.classList.add("selected");
    // //       console.log(myRef.current.className);
    // //       setTrueAns((prev) => prev + 1);
    // //     } else if (
    // //       (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[1]) |
    // //       (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[2]) |
    // //       (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[3])
    // //     ) {
    // //       setWrongAns((prev) => prev + 1);
    // //     }
    // //   }, 2000);
    //   setTimeout(() => {

    //     setUserAnswers((prevAns) => {
    //       return [...prevAns, selectedAnswer];
    //     });
    //   }, 2000);
    // },
    []
  );

  const handleSkipAnswer = useCallback(() => {
    handleClick(null);
    setNullAns((prev) => prev + 1);
  }, [handleClick]);

  console.log(userAnswers);

  //shuffle function
  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const quizCompletedOrNot = activeQuestionIndex === QUESTIONS.length;
  {
    console.log(quizCompletedOrNot);
  }

  if (quizCompletedOrNot) {
    return (
      <>
        <div>
          <img src={IMG} alt="" />
          <h2> True an is </h2>
          {trueAns}
          <h2> Null ans is </h2>
          {nullAns}
          <h2> Wrong ans is </h2>
          {wrongAns}
        </div>
      </>
    );
  }
  const randomAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  const outPutAns = shuffleArray(randomAnswers);

  return (
    <>
      <div>
        <div>
          <QuestionTimer
            key={activeQuestionIndex}
            timeOut={3000}
            onTimeout={handleSkipAnswer}
          />
          <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
          <ul>
            {outPutAns.map((answer) => {
              return (
                <div key="focus" id="focus" class="ans" ref={myRef}>
                  <li key={answer} className={answer}>
                    <button onClick={() => handleClick(answer)}>
                      {answer}
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

//Fisher - Yates shuffle
