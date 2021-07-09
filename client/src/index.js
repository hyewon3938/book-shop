import ReactDOM from "react-dom";
import React from "react";

import { Provider } from "react-redux";
import store from "@/redux/store";

const rootElement = document.getElementById("root");

import("@/App").then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
