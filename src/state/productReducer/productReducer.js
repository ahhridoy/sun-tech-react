import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
};

export const productReducer = (state, action) => {
  const { START, SUCCESS, ERROR, ADD_TO_CART, REMOVE_FROM_CART } = actionTypes;
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_TO_CART:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.payload],
        error: false,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        loading: false,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
        error: false,
      };
    default:
      return state;
  }
};
