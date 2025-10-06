import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const playerName = useRef("");

  // function handleChange(event) {
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "No-name"} </h2>
      <div>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}
