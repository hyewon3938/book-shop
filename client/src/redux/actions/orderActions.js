import * as actionTypes from "@/redux/constants/orderConstants";
import axios from "axios";

export const postStockCheck = (productArray) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_STOCK_CHECK_REQUEST });

    const { data } = await axios.post(`/api/orders/check-stock`, { productArray: productArray });
    dispatch({
      type: actionTypes.POST_STOCK_CHECK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_STOCK_CHECK_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const removeStockCheckData = () => {
  return { type: actionTypes.REMOVE_STOCK_CHECK_DATA };
};
