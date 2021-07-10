import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setNavFlag} from "../../utils/reducers/globalReducer";
import {PageHeader} from "antd";
import {ReactComponent as Cat} from "../../assets/svgs/cat.svg";


const DesktopHeader = () => {
    // connection to store
    const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

    // dispatch store
    const dispatch = useDispatch();

  return (
      <header className="header-container-dk">
          <PageHeader
              className="title-wrapper"
              backIcon={false}
              onBack={() => null}
              title="HYRO"
              subTitle="Everything begins with your stance. Remember."
          />
          <div className="logo-wrapper" onClick={() => dispatch(setNavFlag(!navFlag))}>
              <Cat width={48} height={48} fill={'#0102fe'}/>
          </div>
      </header>
  );
};

export default DesktopHeader;
