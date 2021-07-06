/** @format */

import React from "react";
import { Avatar } from "evergreen-ui";
import NavigatiomCustom from "../customs/navigation/NavigatiomCustom";

const MobileNavigation = () => {
  const toggleNav = () => {};
  return (
    <>
      <NavigatiomCustom />
      <Avatar
        onClick={toggleNav}
        src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg'
        name='Alan Turing'
        size={40}
      />
    </>
  );
};

export default MobileNavigation;
