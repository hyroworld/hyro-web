/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNavFlag } from "../../utils/reducers/globalReducer";

const MobileHeader = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
    <header>
      <span onClick={() => dispatch(setNavFlag(!navFlag))}>😋</span>
    </header>
  );
};

export default MobileHeader;
