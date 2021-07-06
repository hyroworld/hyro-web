/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "evergreen-ui";
import { setNavFlag } from "../../utils/reducers/globalReducer";

const MobileHeader = () => {
  // connection to store
  const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);

  // dispatch store
  const dispatch = useDispatch();

  return (
    <header>
      <Button
        className='custom-button'
        onClick={() => dispatch(setNavFlag(!navFlag))}
        marginRight={0}
        appearance='minimal'>
        HYRO
      </Button>
    </header>
  );
};

export default MobileHeader;
