import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu({ closeMenu }) {
  return (
    <div className="side-menu show-menu" style={{ width: "50%" }}>
      <div className="close-btn" onClick={closeMenu}>
        <span className="material-icons">close</span>
      </div>
      <ul>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            <span className="material-icons">dashboard</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="/Users" onClick={closeMenu}>
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
