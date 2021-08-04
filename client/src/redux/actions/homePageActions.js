import * as actionTypes from "@/redux/constants/homePageConstants";
import axios from "axios";
import { cacheRequest } from "@/lib/cacheRequest";

export const setIsHomePage = (payload) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_IS_HOMEPAGE, payload: payload });
};

export const getRecommendation = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_RECOMMENDATION_REQUEST });

    const { data } = await cacheRequest.get(`/api/recommendation`);
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

export const getAd = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_AD_REQUEST });

    const { data } = await cacheRequest.get(`/api/ad`);
    dispatch({
      type: actionTypes.GET_AD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AD_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getNewArrival = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_NEW_ARRIVAL_REQUEST });

    const { data } = await cacheRequest.get(`/api/newArrival`);
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
