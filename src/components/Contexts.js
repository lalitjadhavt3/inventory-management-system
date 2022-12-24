import React from "react";

export const SideBarContext = React.createContext({
  showSideMenu: false,
  setShowSideMenu: () => {},
});
