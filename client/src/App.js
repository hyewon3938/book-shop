import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import GlobalStyleProvider from "@/components/style/GlobalStyleProvider";
import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage/HomePage";
import ProductsPage from "@/components/ProductsPage/ProductsPage";
import ProductDetailsPage from "@/components/ProductDetailsPage/ProductDetailsPage";
import CartPage from "@/components/CartPage/CartPage";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product/:category" component={ProductsPage} />
            <Route exact path="/product/:category/:id" component={ProductDetailsPage} />
            <Route exact path="/cart" component={CartPage} />
          </Switch>
        </main>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
