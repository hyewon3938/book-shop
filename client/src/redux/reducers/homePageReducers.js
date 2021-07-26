import * as actionTypes from "@/redux/constants/homePageConstants";

export const getRecommendationReducer = (state = { recommendation: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_RECOMMENDATION_REQUEST:
      return {
        loading: true,
        recommendation: [],
      };

    case actionTypes.GET_RECOMMENDATION_SUCCESS:
      return {
        loading: false,
        recommendation: action.payload,
      };

    case actionTypes.GET_RECOMMENDATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getNewArrivalReducer = (state = { newArrival: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_NEW_ARRIVAL_REQUEST:
      return {
        loading: true,
        newArrival: [],
      };

    case actionTypes.GET_NEW_ARRIVAL_SUCCESS:
      return {
        loading: false,
        newArrival: action.payload,
      };

    case actionTypes.GET_NEW_ARRIVAL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
