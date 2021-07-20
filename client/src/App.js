import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

// Components
import GlobalStyleProvider from "@/components/style/GlobalStyleProvider";
import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage/HomePage";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import CartPage from "@/components/CartPage/CartPage";

// Lib
import ScrollReset from "@/lib/ScrollReset";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router>
        <Header />
        <main>
          <CacheSwitch>
            <ScrollReset>
              <Route exact path="/" component={HomePage} />
              <CacheRoute exact path="/product/:category" component={ProductsPage} />
              <Route exact path="/product/:category/:id" component={ProductDetailsPage} />
              <Route exact path="/cart" component={CartPage} />
            </ScrollReset>
          </CacheSwitch>
        </main>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
