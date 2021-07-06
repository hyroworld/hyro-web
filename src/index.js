/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import Router
import { BrowserRouter } from "react-router-dom";

// import Scss
import "./assets/scss/main.scss";

// import Redux and Redux Saga
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./utils/reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// store
const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare],
});

// run Saga
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
