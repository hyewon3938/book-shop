import * as actionTypes from "@/redux/constants/loginConstants";
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
