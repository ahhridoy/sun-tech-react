import React from "react";
import CartCard from "../components/CartCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Something went wrong</p>;
  } else if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <CartCard key={product.id} product={product} />
    ));
  } else {
    content = <p>Data not found</p>;
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default Cart;
