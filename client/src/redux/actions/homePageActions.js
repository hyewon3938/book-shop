import * as actionTypes from "@/redux/constants/homePageConstants";
import axios from "axios";
import { cacheRequest } from "@/lib/cacheRequest";

export const setIsHomePage = (payload) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_IS_HOMEPAGE, payload: payload });
};

export const getRecommendation = (history) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_RECOMMENDATION_REQUEST });

    const { data } = await cacheRequest.get(`/api/recommendation`, {
      forceUpdate: history.action === "PUSH",
      cache: true,
    });
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

export const getAd = (history) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_AD_REQUEST });

    const { data } = await cacheRequest.get(`/api/ad`, {
      forceUpdate: history.action === "PUSH",
      cache: true,
    });
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

export const getNewArrival = (history) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_NEW_ARRIVAL_REQUEST });

    const { data } = await cacheRequest.get(`/api/newArrival`, {
      forceUpdate: history.action === "PUSH",
      cache: true,
    });
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
