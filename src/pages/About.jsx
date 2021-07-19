import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";

const About = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("about"));
  }, []);
  return (
    <div>
      <h3>About Me Page</h3>
    </div>
  );
};

export default About;
