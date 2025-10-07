import ProductList from "./ProductList.jsx";
import { useEffect, useState } from "react";
import CartContext from "./CartContext.jsx";

export default function MainShop() {
  const [count, setCount] = useState(0);
  function cartUpdate() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    {
      console.log("fetch started");
    }
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("fetch finished");
  }, []);
  // {console.log("fetch started")}
  // fetch("https://fakestoreapi.com/products")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // console.log("fetch finished");
  return (
    <CartContext.Provider value={{ count, cartUpdate }}>
      <div>
        <h1>
          Cart <strong>{count}</strong> items
        </h1>
        {console.log("Re-render")}
        <ProductList />
      </div>
    </CartContext.Provider>
  );
}
