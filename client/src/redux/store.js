import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { getProductDetailsReducer, getProductsReducer } from "@/redux/reducers/productReducers";
import { cartReducer } from "@/redux/reducers/cartReducers";
import {
  homePageReducer,
  getRecommendationReducer,
  getNewArrivalReducer,
  getAdReducer,
} from "@/redux/reducers/homePageReducers";
import {
  postLoginReducer,
  getLogoutReducer,
  authReducer,
  postEmailCheckReducer,
  postRegisterReducer,
} from "@/redux/reducers/userReducers";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  homePage: homePageReducer,
  getRecommendation: getRecommendationReducer,
  getNewArrival: getNewArrivalReducer,
  getAd: getAdReducer,
  postLogin: postLoginReducer,
  getLogout: getLogoutReducer,
  auth: authReducer,
  emailCheck: postEmailCheckReducer,
  register: postRegisterReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
