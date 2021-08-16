import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// hoc
import withPathCheck from "@/hoc/withPathCheck";
import auth from "@/hoc/auth";

// Components
import GlobalStyleProvider from "@/components/style/GlobalStyleProvider";
import ScrollTopButton from "@/components/ScrollTopButton";
import HomePage from "@/components/HomePage/HomePage";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import CartPage from "@/components/CartPage/CartPage";
import LoginPage from "@/components/LoginPage/LoginPage";
import RegisterPage from "@/components/RegisterPage/RegisterPage";
import OrderPage from "@/components/OrderPage/OrderPage";
import UserPage from "@/components/UserPage/UserPage";
import NotFound from "@/components/NotFound";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router>
        <ScrollTopButton />
        <main>
          <Switch>
            <Route exact path="/" component={withPathCheck(auth(HomePage, null))} />
            <Route
              exact
              path="/product/:category"
              component={withPathCheck(auth(ProductsPage, null))}
            />
            <Route
              exact
              path="/product/:category/:id"
              component={withPathCheck(auth(ProductDetailsPage, null))}
            />
            <Route exact path="/cart" component={withPathCheck(auth(CartPage, null))} />
            <Route exact path="/login" component={withPathCheck(auth(LoginPage, false))} />
            <Route exact path="/register" component={withPathCheck(auth(RegisterPage, false))} />
            <Route exact path="/order" component={withPathCheck(auth(OrderPage, true))} />
            <Route exact path="/myPage" component={withPathCheck(auth(UserPage, true))} />
            <Route exact path="/notFound" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
