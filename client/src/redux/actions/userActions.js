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
  try {
    dispatch({ type: actionTypes.GET_AUTH_REQUEST });

    const { data } = await axios.get(`/api/users/auth`);
    dispatch({
      type: actionTypes.GET_AUTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AUTH_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
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

export const postEmailCheck = (email) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_EMAIL_CHECK_REQUEST });

    const { data } = await axios.post(`/api/users/check-email`, { email: email });
    dispatch({
      type: actionTypes.POST_EMAIL_CHECK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_EMAIL_CHECK_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const postRegister =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.POST_REGISTER_REQUEST });

      const { data } = await axios.post(`/api/users/register`, {
        name: name,
        email: email,
        password: password,
        role: "User",
      });
      dispatch({
        type: actionTypes.POST_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POST_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
