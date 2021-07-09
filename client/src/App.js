import React, { useState } from "react";
import GlobalStyleProvider from "@/components/style/GlobalStyleProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import cartPage from "./pages/CartPage";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/BackDrop";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <GlobalStyleProvider>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product/:id" component={ProductPage} />
            <Route exact path="/cart" component={cartPage} />
          </Switch>
        </main>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
