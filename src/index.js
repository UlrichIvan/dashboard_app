import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./redux"
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
