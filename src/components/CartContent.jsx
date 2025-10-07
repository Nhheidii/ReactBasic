import CartButton from "./CartButton.jsx";
export default function CartContent({ addToCart }) {
  return (
    <>
      <CartButton addToCart={addToCart} />
      <p> The items in cart is: xx </p>
    </>
  );
}
