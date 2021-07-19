import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryRoute } from "../utils/reducers/routesReducer";
import { setNavFlag } from "../utils/reducers/globalReducer";

const Contact = () => {
  // 상수 선언
  const dispatch = useDispatch();

  // set primary route
  useEffect(() => {
    dispatch(setPrimaryRoute("contact"));
    dispatch(setNavFlag(false));
  }, []);

  return (
    <div>
      <h3>Contact Page</h3>
    </div>
  );
};

export default Contact;
