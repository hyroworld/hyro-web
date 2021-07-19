import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";

const Posts = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("posts"));
  }, []);

  return (
    <div>
      <h3>Post List</h3>
    </div>
  );
};

export default Posts;
