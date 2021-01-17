import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import todoReducer from "./store/reducers/todoReducer";

import App from "./App";

const reducers = combineReducers({
  todoList: todoReducer,
});
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
