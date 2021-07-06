/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Position, SideSheet } from "evergreen-ui";
import { setNavFlag } from "../../utils/reducers/globalReducer";

const MobileNavigation = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
    <>
      <SideSheet
        isShown={navFlag}
        position={Position.BOTTOM}
        onCloseComplete={() => dispatch(setNavFlag(false))}></SideSheet>
    </>
  );
};

export default MobileNavigation;
