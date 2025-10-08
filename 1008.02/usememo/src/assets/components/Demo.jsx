import { useMemo, useState } from "react";
function Demo({ Number }) {
  function DifficultCal(num) {
    console.log("Tinh toan lai");
    let result = 0;
    for (let i = 0; i <= 999; i++) {
      result += num;
    }
    return result;
  }
  //   const result = DifficultCal(Number);
  const result = useMemo(() => DifficultCal(Number), []);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1> Your result is: {result} </h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add count
      </button>
      <h2> Click nums is {count} </h2>
    </>
  );
}
export default Demo;
