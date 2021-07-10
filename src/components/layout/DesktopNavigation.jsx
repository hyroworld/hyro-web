import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {setNavFlag, setSecondNavFlag} from "../../utils/reducers/globalReducer";

import { Drawer } from "antd";
import NavItemList from "../navigation/NavItemList";

const DesktopNavigation = () => {
    // connection to store
    const navFlag = useSelector((state) => state.globalReducer.NAV_FLAG);
    // const secondNavFlag = useSelector(state => state.globalReducer.SECOND_NAV_FLAG);

    // dispatch store
    const dispatch = useDispatch();

    return (
        <Drawer
            placement={"right"}
            closable={false}
            onClose={() => dispatch(setNavFlag(false))}
            visible={navFlag}>
            <NavItemList />
        </Drawer>
    )
}

export default DesktopNavigation
