import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Components
import GlobalStyleProvider from "@/components/style/GlobalStyleProvider";
import ScrollTopButton from "@/components/ScrollTopButton";
import HomePage from "@/components/HomePage/HomePage";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import CartPage from "@/components/CartPage/CartPage";
import LoginPage from "@/components/LoginPage/LoginPage";
import RegisterPage from "@/components/RegisterPage/RegisterPage";
import auth from "@/hoc/auth";
import NotFound from "@/components/NotFound";

// Lib
import ScrollReset from "@/lib/ScrollReset";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router>
        <ScrollTopButton />
        <ScrollReset>
          <main>
            <Switch>
              <Route exact path="/" component={auth(HomePage, null)} />
              <Route exact path="/product/:category" component={auth(ProductsPage, null)} />
              <Route
                exact
                path="/product/:category/:id"
                component={auth(ProductDetailsPage, null)}
              />
              <Route exact path="/cart" component={auth(CartPage, null)} />
              <Route exact path="/login" component={auth(LoginPage, false)} />
              <Route exact path="/register" component={auth(RegisterPage, false)} />
              <Route exact path="/notFound" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </ScrollReset>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
