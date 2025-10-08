import { memo } from "react";

function Child({ value, clickHandle }) {
  console.log("Child render");
  return (
    <>
      <h2> Gia tri tu cha la: {value}</h2>
      <button onClick={clickHandle}> Tang cha </button>
    </>
  );
}
export default memo(Child);
