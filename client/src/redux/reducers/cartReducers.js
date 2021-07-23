import * as actionType from "@/redux/constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionType.REMOVE_SELECTED_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionType.SELECT_ALL_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionType.UNSELECT_ALL_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionType.SELECT_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
