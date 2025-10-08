import { useCallback, useState } from "react";
import Child from "./Child";
function Demo() {
  const [count, setCount] = useState(0);
  //   function Add() {
  //     setCount((prev) => prev + 1);
  //   }

  const Add = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2> Gia tri dem cua cha la: {count} </h2>
      <Child value={1} clickHandle={Add} />
    </>
  );
}
export default Demo;
