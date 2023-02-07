import React from "react";
import { useProducts } from "../context/ProductProvider";
import { actionTypes } from "../state/productReducer/actionTypes";

const CartCard = ({ product }) => {
  const { dispatch } = useProducts();
  const { REMOVE_FROM_CART } = actionTypes;
  return (
    <div className="border-2 border-indigo-400 rounded p-3 my-2">
      <div className="flex justify-between items-center">
        <div className="w-52">
          <img src={product.image} alt={product.model} />
        </div>
        <div>
          <h3>{product.model}</h3>
          <button
            className="bg-indigo-500 py-1 px-2 text-white text-bold"
            onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: product })}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
