import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // провайдер связывает состояния редакс с реактом
import { createStore } from "redux";
import { store } from "./Store";

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
