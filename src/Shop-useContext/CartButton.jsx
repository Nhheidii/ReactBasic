import { useContext } from "react";
import CartContext from "./CartContext.jsx";

export default function CartButton() {
  const { count, cartUpdate } = useContext(CartContext);
  return (
    <>
      <button onClick={cartUpdate}> Add to cart</button>
    </>
  );
}
