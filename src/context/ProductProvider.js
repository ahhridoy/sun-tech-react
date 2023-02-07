import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/productReducer/actionTypes";
import {
  initialState,
  productReducer,
} from "../state/productReducer/productReducer";

const PRODUCTS_DATA = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { START, SUCCESS, ERROR } = actionTypes;

  useEffect(() => {
    dispatch({ type: START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: SUCCESS, payload: data }))
      .catch((err) => {
        dispatch({ type: ERROR });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCTS_DATA.Provider value={value}>{children}</PRODUCTS_DATA.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCTS_DATA);
  return context;
};

export default ProductProvider;
