/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {logDOM} from "@testing-library/react";
import Enum from 'enum';

const pageConfig = new Enum({
  MAIN: ['/', 'MAIN'],
  INFO: ['/info', 'INFORMATION'],
  POST: ['/posts', 'POSTS'],
  CONTACT: ['/contact', 'CONTACT'],
  ASK: ['/ask', 'ASK']
})

const navList = pageConfig.enums.map(nav => {return <li key={nav.key}><Link to={nav.value[0]}>{nav.value[1]}</Link></li>})

const NavItemList = () => {
  return (
    <nav>
      <ul>
        {navList}
      </ul>
    </nav>
  );
};

export default NavItemList;
