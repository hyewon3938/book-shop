import * as actionTypes from "@/redux/constants/userConstants";

export const postLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.POST_LOGIN_SUCCESS:
      return {
        loading: false,
        login: action.payload,
      };

    case actionTypes.POST_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGOUT_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GET_LOGOUT_SUCCESS:
      return {
        loading: false,
        logout: action.payload,
      };

    case actionTypes.GET_LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const authReducer = (state = { userData: {} }, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};