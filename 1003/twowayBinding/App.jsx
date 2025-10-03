import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [inputValue, setInputValue] = useState("Default-value");

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Two-way Binding study</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        {/* <label htmlFor=""> Name: </label> */}
        <input
          name="name"
          value={user.name}
          type="text"
          placeholder="Input your name"
          onChange={handleChange}
        />
        <br />
        {/* <label htmlFor=""> Email: </label> */}
        <input
          name="email"
          value={user.email}
          type="email"
          placeholder="Input your email"
          onChange={handleChange}
        />
        <h1>Your input value is</h1>
        <p> Name is: {user.name} </p>
        <p> Email is:{user.email} </p>
        <br />
      </p>
    </>
  );
}

export default App;
