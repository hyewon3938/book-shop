import * as actionTypes from "@/redux/constants/cartConstants";

export const addToCart = (payload) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  const existItem = cartItems.find((item) => item._id == payload._id);

  if (existItem) {
    const updatedCartItems = cartItems.map((item) => {
      item._id === existItem._id ? (item.qty = payload.qty) : item;
      return item;
    });
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: updatedCartItems,
    });
  } else {
    const updatedCartItems = [...cartItems, payload];
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: updatedCartItems,
    });
  }

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  const updatedCartItems = getState().cart.cartItems.filter((item) => item._id !== id);

  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: updatedCartItems,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeSelectedItem = () => (dispatch, getState) => {
  const updatedCartItems = getState().cart.cartItems.filter((x) => !x.isSelected);

  dispatch({
    type: actionTypes.REMOVE_SELECTED_ITEMS,
    payload: updatedCartItems,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const selectAllCart = () => (dispatch, getState) => {
  const updatedCartItems = getState().cart.cartItems.map((x) => {
    x.isSelected = true;
    return x;
  });

  dispatch({
    type: actionTypes.SELECT_ALL_ITEMS,
    payload: updatedCartItems,
  });
};

export const unselectAllCart = () => (dispatch, getState) => {
  const updatedCartItems = getState().cart.cartItems.map((x) => {
    x.isSelected = false;
    return x;
  });

  dispatch({
    type: actionTypes.UNSELECT_ALL_ITEMS,
    payload: updatedCartItems,
  });
};

export const selectItem = (id) => (dispatch, getState) => {
  const updatedCartItems = getState().cart.cartItems.map((x) => {
    if (x._id === id) {
      x.isSelected = !x.isSelected;
    }
    return x;
  });

  dispatch({
    type: actionTypes.SELECT_ITEM,
    payload: updatedCartItems,
  });
};
