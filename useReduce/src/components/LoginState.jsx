import { useState } from "react";

export default function LoginState() {
  const [loginState, setLoginState] = useState(false);

  function loginSetting() {
    setLoginState(true);
  }
  function loggoutSetting() {
    setLoginState(false);
  }

  return (
    <>
      <button onClick={loginSetting}> Log-in </button>
      <button onClick={loggoutSetting}> Log-out </button>
      <p>
        {loginState ? (
          <h3> Welcome home Pooh </h3>
        ) : (
          <h3> You havent loggin yet</h3>
        )}
      </p>
    </>
  );
}
