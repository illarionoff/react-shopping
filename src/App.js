import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
// CSS import
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components import
import Navbar from "./components/Navbar";
import ProductList from "./components/Product";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
