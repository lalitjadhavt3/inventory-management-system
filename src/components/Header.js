import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "./Contexts";

function Header({title}) {
  const { showSideMenu, setShowSideMenu } = useContext(SideBarContext);

  useEffect(() => {
    const element = document.getElementById("sidebar-menu");
    if (showSideMenu) {
      element.classList.add("show-menu");
    } else {
      element.classList.remove("show-menu");
    }
  }, [showSideMenu]);

  return (
    <div className="navbar two-action no-hairline">
      <div className="navbar-inner d-flex align-items-center">
        <div className="left">
          <div
            className={"link icon-only"}
            onClick={() => setShowSideMenu(true)}
          >
            <i className="custom-hamburger">
              <span>
                <b></b>
              </span>
            </i>
          </div>
          {/* <a href="#" className="link icon-only">
            
          </a> */}
        </div>
        <div className="sliding custom-title">{title}</div>
        <div className="right d-flex">
          <a href="notifications.html" className="link icon-only">
            <i className="material-icons">notifications</i>
          </a>
          <a
            href="#"
            data-toggle="dropdown"
            aria-expanded="true"
            className="link"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right header_drop_icon">
            <a href="doctor-profile.html" className="dropdown-item">
              My Profile
            </a>
            <a href="profile-settings.html" className="dropdown-item">
              Settings
            </a>
            <a href="login.html" className="dropdown-item">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
