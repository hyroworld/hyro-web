/** @format */

import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";

// reducers
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({
  globalReducer,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
