/** @format */

import { createAction, createReducer } from "@reduxjs/toolkit";

// 액션 이름 상수 선언
const SET_NAV_FLAG = "SET_NAV_FLAG";

// 액션 정의
export const setNavFlag = createAction(SET_NAV_FLAG);

// 초기값
const initialState = {
  NAV_FLAG: false,
};

// 리듀서
export default createReducer(initialState, {
  [SET_NAV_FLAG]: (state, { payload: flag }) => {
    state["NAV_FLAG"] = flag;
  },
});
