import * as actionTypes from "@/redux/constants/loginConstants";

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
