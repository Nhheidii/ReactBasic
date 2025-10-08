import { useLayoutEffect, useState } from "react";
export default function Demo() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => prev + 1);
  }
  useLayoutEffect(() => {
    if (count > 5) {
      setCount(0);
      console.log("useLayOffEffect is cleared");
    }
  }, [count]);
  return (
    <>
      <button onClick={handleClick}> Count </button>
      <h2> count is: {count}</h2>
    </>
  );
}
