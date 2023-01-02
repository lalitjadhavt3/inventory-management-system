import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Head from "./components/Head";
import { Users, Home, AddUsers } from "./screens";
import Scripts from "./components/Scripts";
import store from "./store/Store";

function App() {
  // const [showSideMenu, setShowSideMenu] = useState(false);
  // const value = { showSideMenu, setShowSideMenu };

  return (
    // <SideBarContext.Provider value={value}>
    <Provider store={store}>
      <Router>
        <Head />
        {/* <SideMenu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddUsers" element={<AddUsers />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
        <Scripts />
      </Router>
    </Provider>
    // </SideBarContext.Provider>
  );
}

export default App;
