import React from "react";
import { NavLink } from "react-router-dom";

function RightDropdownMenu({ closeMenu }) {
  return (
    <div className="dropdown-menu dropdown-menu-right header_drop_icon show">
      <div className="dropdown-item" onClick={closeMenu}>
        My Profile
      </div>
      <div className="dropdown-item" onClick={closeMenu}>
        Settings
      </div>
      <div className="dropdown-item" onClick={closeMenu}>
        Log Out
      </div>
    </div>
  );
}
export default RightDropdownMenu;
