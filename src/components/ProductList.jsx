import ProductItems from "./ProductItems";

export default function ProductList({addToCart}) {
  return (
    <>
      <h2> List of items </h2>
      <ProductItems addToCart = {addToCart} />
    </>
  );
}
