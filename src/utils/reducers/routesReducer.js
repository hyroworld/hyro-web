import { createAction, createReducer } from "@reduxjs/toolkit";

// 액션 이름 상수 선언
const SET_PRIMARY_ROUTE = "SET_PRIMARY_ROUTE";

// 액션 정의
export const setPrimaryRoute = createAction(SET_PRIMARY_ROUTE, (location) => {
  console.log(location);

  return { payload: location };
});

// 초기값
const initialState = {
  CURRENT_ROUTE: "/main",
};

// 리듀서
export default createReducer(initialState, {
  [SET_PRIMARY_ROUTE]: (state, { payload: location }) => {
    state.CURRENT_ROUTE = location;
  },
});
