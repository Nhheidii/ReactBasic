import { useEffect, useState } from "react";

export default function TimeDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const setTimeOutId = setTimeout(() => {
      console.log("setTimeout is called");
      setCount((prev) => prev + 1);
    }, 1000);
    // clean up
    return () => {
      clearTimeout(setTimeOutId);
      console.log("setTimeout is cleared");
    };
  }, [count]);

  //   useEffect(() => {
  //     const setIntervalId = setInterval(() => {
  //       console.log("setInterval is called");
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //     //clean up
  //     return () => {
  //       clearInterval(setIntervalId);
  //       console.log("Interval is cleared");
  //     };
  //   }, []);

  return (
    <>
      <h3> Mount/ UnMount</h3>
      <p> count : {count} </p>
    </>
  );
}
