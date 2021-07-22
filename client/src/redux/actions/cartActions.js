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
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};