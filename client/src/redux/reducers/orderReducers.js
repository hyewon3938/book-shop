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

export const postOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_ORDER_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.POST_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case actionTypes.POST_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.REMOVE_ORDER_DATA:
      return {};
    default:
      return state;
  }
};

export const orderInfoReducer = (state = { orderInfo: [] }, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDER_INFO:
      return {
        orderInfo: action.payload.productInfoArray,
        path: action.payload.path,
      };
    case actionTypes.REMOVE_ORDER_INFO:
      return {};
    default:
      return state;
  }
};

export const getOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GET_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case actionTypes.GET_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
