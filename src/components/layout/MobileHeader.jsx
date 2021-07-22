import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNavFlag } from "../../utils/reducers/globalReducer";

import { ReactComponent as Cat } from "../../assets/svgs/cat.svg";
import { ReactComponent as Bird } from "../../assets/svgs/bird.svg";

const MobileHeader = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
    <header className="header-container-mb">
      <div className="logo-wrapper" onClick={() => dispatch(setNavFlag(!navFlag))}>
          <Bird width={100} height={100} fill={'#0102fe'}/>
      </div>
      <div className="title-wrapper">
          <span>HYRO</span>
      </div>
    </header>
  );
};

export default MobileHeader;
