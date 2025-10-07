import { useReducer } from "react";
const initState = false;
const LOGIN = "login";
const LOGOUT = "logout";
function reducerLogin(state, action) {
  switch (action) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      throw new Error("Not allowed action");
  }
}
export default function LoginUseReducer() {
  //   const [loginState, setLoginState] = useState(false);
  const [isLogged, dispatch] = useReducer(reducerLogin, initState);

  return (
    <div>
      <h2>
        {isLogged ? <p>Welcome home Pooh</p> : <p> Havent loggin yet </p>}
      </h2>
      <button onClick={() => dispatch(LOGIN)}> Login </button>
      <button onClick={() => dispatch(LOGOUT)}> Logout </button>
    </div>
  );
}
