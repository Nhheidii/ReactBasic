import ProductList from "./ProductList";
import { useState } from "react";

export default function MainShop() {
  const [count, setCount] = useState(0);
  function cartUpdate() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <h1>
        Cart <strong>{count}</strong> items
      </h1>
      <ProductList addToCart={cartUpdate} />
    </>
  );
}
