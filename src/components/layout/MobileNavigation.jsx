import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "antd";
import { setNavFlag } from "../../utils/reducers/globalReducer";

// Components
import NavItemList from "../navigation/NavItemList";

const MobileNavigation = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
      <nav className="navigation-container-mb">
        <Drawer
          placement={"bottom"}
          closable={false}
          onClose={() => dispatch(setNavFlag(false))}
          visible={navFlag}>
          <NavItemList />
        </Drawer>
      </nav>
  );
};

export default MobileNavigation;
