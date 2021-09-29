import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";
import { setNavFlag } from "../utils/reducers/globalReducer";

const Posts = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("posts"));
    dispatch(setNavFlag(false));
  }, [dispatch]);

  return (
    <div>
      <h3>Post List 준비중</h3>
    </div>
  );
};

export default Posts;
