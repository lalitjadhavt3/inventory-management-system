import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideBarContext } from "./components/Contexts";
import Head from "./components/Head";
import SideMenu from "./components/SideMenu";
import Scripts from "./components/Scripts";
import { Users, Home } from "./screens";
function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const value = { showSideMenu, setShowSideMenu };

  return (
    <SideBarContext.Provider value={value}>
      <Router>
        <Head />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Users" element={<Users />} />
        </Routes>
        <Scripts />
      </Router>
    </SideBarContext.Provider>
  );
}

export default App;
