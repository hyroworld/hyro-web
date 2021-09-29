import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";
import { setNavFlag } from "../utils/reducers/globalReducer";

const Main = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("main"));
    dispatch(setNavFlag(false));
  }, [dispatch]);

  return (
    <div>
      <h3>Main 준비중</h3>
    </div>
  );
};

export default Main;
