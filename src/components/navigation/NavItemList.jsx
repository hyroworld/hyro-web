import React from "react";
import { Link } from "react-router-dom";
import { primaryRoute } from "../../configs/routeConfig";

// generate navigation items
const navList = primaryRoute.enums.map((nav) => {
  return (
    <li key={nav.key}>
      <Link to={nav.value[0]}>{nav.value[1]}</Link>
    </li>
  );
});

// render
const NavItemList = () => {
  return (
    <nav>
      <ul>{navList}</ul>
    </nav>
  );
};

export default NavItemList;
