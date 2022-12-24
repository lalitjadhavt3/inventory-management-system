import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "./Contexts";

function SideMenu() {
  const { showSideMenu, setShowSideMenu } = useContext(SideBarContext);

  return (
    <div className="side-menu" id="sidebar-menu" style={{ width: "50%" }}>
      <div className="close-btn">
        <span className="material-icons">close</span>
      </div>
      <ul>
        <li>
          <NavLink to="/" onClick={() => setShowSideMenu(false)}>
            <span className="material-icons">dashboard</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className=""
            to="/Users"
            onClick={() => setShowSideMenu(false)}
          >
            <span className="material-icons">date_range</span>
            Users
          </NavLink>
        </li>
      </ul>
      <a
        className="sidebar-logout"
        href="/login"
        style={{ position: "absolute", bottom: 0 }}
      >
        <span>
          <img src="assets/img/open-account-logout.svg" alt="" />
        </span>
        Logout
      </a>
    </div>
  );
}
export default SideMenu;
