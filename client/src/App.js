import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Components
import GlobalStyleProvider from "@/components/style/GlobalStyleProvider";
import Header from "@/components/Header/Header";
import ScrollTopButton from "@/components/ScrollTopButton";
import HomePage from "@/components/HomePage/HomePage";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import CartPage from "@/components/CartPage/CartPage";
import LoginPage from "@/components/LoginPage/LoginPage";
import auth from "@/hoc/Auth";

// Lib
import ScrollReset from "@/lib/ScrollReset";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router>
        <Header />
        <ScrollTopButton />
        <main>
          <Switch>
            <ScrollReset>
              <Route exact path="/" component={auth(HomePage, null)} />
              <Route exact path="/product/:category" component={auth(ProductsPage, null)} />
              <Route
                exact
                path="/product/:category/:id"
                component={auth(ProductDetailsPage, null)}
              />
              <Route exact path="/cart" component={auth(CartPage, null)} />
              <Route exact path="/login" component={auth(LoginPage, false)} />
            </ScrollReset>
          </Switch>
        </main>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
