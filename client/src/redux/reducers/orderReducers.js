import * as actionTypes from "@/redux/constants/orderConstants";

export const postStockCheckReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_STOCK_CHECK_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.POST_STOCK_CHECK_SUCCESS:
      return {
        loading: false,
        stockCheck: action.payload,
      };
    case actionTypes.POST_STOCK_CHECK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.REMOVE_STOCK_CHECK_DATA:
      return {};
    default:
      return state;
  }
};
