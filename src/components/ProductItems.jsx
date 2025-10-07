import CartContent from "./CartContent";
export default function ProductItems({ addToCart }) {
  return (
    <>
      <CartContent addToCart={addToCart} />
      <h3> Product A </h3>
    </>
  );
}
