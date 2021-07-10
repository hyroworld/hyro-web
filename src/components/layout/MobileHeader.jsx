import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNavFlag } from "../../utils/reducers/globalReducer";

import { ReactComponent as Cat } from "../../assets/svgs/cat.svg";

const MobileHeader = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
    <header className="header-container-mb">
      <div className="logo-wrapper" onClick={() => dispatch(setNavFlag(!navFlag))}>
          <Cat width={48} height={48} fill={'#0102fe'}/>
      </div>
      <div className="title-wrapper">
          <span>HYRO</span>
      </div>
    </header>
  );
};

export default MobileHeader;
