import { createAction, createReducer } from "@reduxjs/toolkit";

// 액션 이름 상수 선언
const SET_CURRENT_ROUTE = "SET_CURRENT_ROUTE";

// 액션 정의
export const setCurrentRoute = createAction(SET_CURRENT_ROUTE);

// 초기값
const initialState = {
    CURRENT_ROUTE: ["HYRO"],
}

// 리듀서
export default createReducer(initialState, {
    [SET_CURRENT_ROUTE]: (state, { payload: { route } }) => {
        state["CURRENT_ROUTE"] = route;
    },
})