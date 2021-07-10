import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";

// reducers
import globalReducer from "./globalReducer";
import routeReducer from "./routesReducer";

const rootReducer = combineReducers({
  globalReducer,
  routeReducer,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
