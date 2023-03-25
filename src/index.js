import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Add apply middleware
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import rootReducer from "./reducer";

// Addition
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  rootReducer, composedEnhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
