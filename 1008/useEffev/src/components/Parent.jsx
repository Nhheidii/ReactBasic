import { useState } from "react";
import TimeDemo from "./TimeDemo.jsx";

export default function Parent() {
  const [show, setShow] = useState(true);
  function handleStart() {
    setShow((s) => !s);
  }
  return (
    <>
      <button onClick={handleStart}>
        {show ? "Hide component" : "Show component"}
      </button>
      {show && <TimeDemo />}
    </>
  );
}
