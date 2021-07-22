import * as actionTypes from "@/redux/constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/category/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      _id: data._id,
      title: data.title,
      category: data.category,
      imageUrl: data.coverImage.front,
      price: data.price,
      countInStock: data.countInStock,
      qty,
      isSelected: true,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeSelectedItem = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_SELECTED_ITEMS,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const selectAllCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.SELECT_ALL_ITEMS,
  });
};

export const unselectAllCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.UNSELECT_ALL_ITEMS,
  });
};

export const selectItem = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.SELECT_ITEM,
    payload: id,
  });
};
