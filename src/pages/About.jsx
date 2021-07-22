import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";
import { setNavFlag } from "../utils/reducers/globalReducer";

const About = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("about"));
    dispatch(setNavFlag(false));
  }, [dispatch]);
  return (
    <div>
      <h3>About Me Page</h3>
    </div>
  );
};

export default About;
