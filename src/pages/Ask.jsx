import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";

const Ask = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("ask"));
  }, []);

  return (
    <div>
      <h3>Ask Page</h3>
    </div>
  );
};

export default Ask;
