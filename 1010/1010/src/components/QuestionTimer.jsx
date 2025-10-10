import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeout }) {
  const [remainTime, setRemainTime] = useState(timeOut);
  useEffect(() => {
    console.log("SetTimeOut is called");
    const stpTimeOut = setTimeout(onTimeout, timeOut);
    return () => {
      clearTimeout(stpTimeOut);
    };
  }, [timeOut, onTimeout]);

  useEffect(() => {
    console.log("SetInterval is called");
    const stpInterval = setInterval(() => {
      setRemainTime((pre) => pre - 100);
    }, 100);
    return () => {
      clearInterval(stpInterval);
    };
  }, []);
  return (
    <>
      <progress max={timeOut} value={remainTime} />
    </>
  );
}
