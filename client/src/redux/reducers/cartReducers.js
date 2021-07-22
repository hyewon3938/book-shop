import * as actionType from "@/redux/constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id == item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x._id === existItem._id ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };
    case actionType.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };
    case actionType.SELECT_ALL_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.map((x) => {
          x.isSelected = true;
          return x;
        }),
      };
    case actionType.UNSELECT_ALL_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.map((x) => {
          x.isSelected = false;
          return x;
        }),
      };
    case actionType.SELECT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((x) => {
          if (x._id === action.payload) x.isSelected = !x.isSelected;
          return x;
        }),
      };
    default:
      return state;
  }
};
