import * as actionTypes from "@/redux/constants/userConstants";
import axios from "axios";

export const postLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.POST_LOGIN_REQUEST });

      const { data } = await axios.post(`/api/users/login`, { email: email, password: password });
      dispatch({
        type: actionTypes.POST_LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POST_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAuth = () => async (dispatch) => {
  const response = await axios.get(`/api/users/auth`);
  return dispatch({
    type: actionTypes.AUTH_USER,
    payload: response.data,
  });
};

export const getLogout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/logout`);
    dispatch({
      type: actionTypes.GET_LOGOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
