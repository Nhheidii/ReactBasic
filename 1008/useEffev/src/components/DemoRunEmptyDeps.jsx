import { useEffect, useState } from "react";

export default function DemoRunWithDeps() {
  const [count, setCount] = useState(0);
  function handleStart() {
    setCount(count + 1);
  }
  useEffect(() => {
    {
      console.log("Fetch is started");
    }
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
    {
      console.log("Fetch is finished");
    }
  }, []);
  return (
    <>
      <h3> With Empty dependency </h3>
      <button onClick={handleStart}> Add value </button>
      <p> The current value is {count} </p>
      {console.log("UI is re-rendered")}
    </>
  );
}
