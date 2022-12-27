import React, { useState } from "react";
import RightDropdownMenu from "./RightDropdownMenu";
import SideMenu from "./SideMenu";

function Header({ title }) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showRightDropdownMenu, setShowRightDropdownMenu] = useState(false);

  return (
    <>
      {showSideMenu && <SideMenu closeMenu={() => setShowSideMenu(false)} />}
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
          </div>
          <div className="sliding custom-title">{title}</div>
          <div className="right d-flex">
            <a href="notifications.html" className="link icon-only">
              <i className="material-icons">notifications</i>
            </a>
            <a
              // //href="#"
              //data-toggle="dropdown"
              //aria-expanded="true"
              className="link icon-only"
              onClick={() => setShowRightDropdownMenu(true)}
            >
              <i className="material-icons">more_vert</i>
            </a>
            {showRightDropdownMenu && (
              <RightDropdownMenu
                closeMenu={() => setShowRightDropdownMenu(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
