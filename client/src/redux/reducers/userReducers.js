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
    case actionTypes.REMOVE_LOGIN_DATA:
      return {};
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

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_AUTH_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GET_AUTH_SUCCESS:
      return {
        loading: false,
        auth: action.payload,
      };

    case actionTypes.GET_AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const postEmailCheckReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_EMAIL_CHECK_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.POST_EMAIL_CHECK_SUCCESS:
      return {
        loading: false,
        emailCheck: action.payload,
      };
    case actionTypes.POST_EMAIL_CHECK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.REMOVE_EMAIL_CHECK_DATA:
      return {};
    default:
      return state;
  }
};

export const postRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.POST_REGISTER_SUCCESS:
      return {
        loading: false,
        register: action.payload,
      };
    case actionTypes.POST_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.REMOVE_REGISTER_DATA:
      return {};
    default:
      return state;
  }
};
