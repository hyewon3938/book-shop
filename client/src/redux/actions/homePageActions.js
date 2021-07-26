import * as actionTypes from "@/redux/constants/homePageConstants";
import axios from "axios";

export const getRecommendation = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_RECOMMENDATION_REQUEST });

    const { data } = await axios.get(`/api/products/${category}`);
    dispatch({
      type: actionTypes.GET_RECOMMENDATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_RECOMMENDATION_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getNewArrival = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_NEW_ARRIVAL_REQUEST });

    const { data } = await axios.get(`/api/products/${category}`);
    dispatch({
      type: actionTypes.GET_NEW_ARRIVAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEW_ARRIVAL_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
