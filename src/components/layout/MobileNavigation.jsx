/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Divider } from "antd";
import { setNavFlag } from "../../utils/reducers/globalReducer";

// Components
import NavItemList from "../common/NavItemList";

const MobileNavigation = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
    <Drawer
      placement={"bottom"}
      closable={false}
      onClose={() => dispatch(setNavFlag(false))}
      visible={navFlag}>
      <NavItemList />
      <Divider />
    </Drawer>
  );
};

export default MobileNavigation;
