import { useState, memo } from "react";
import Child from "./Child";

// const Child = memo(function ({ value }) {
//   console.log("Child render");
//   return <>Father value is : {value}</>;
// });
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}> Add count </button>
      <div> Parent value is: {count} </div>
      {/* <Child value={1} /> */}
      <Child value={1} />
    </>
  );
}
export default Parent;
