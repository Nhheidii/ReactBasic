import { memo } from "react";

function Child({ value }) {
  console.log("Child render");
  return <>Father value is : {value}</>;
}

export default memo(Child);
