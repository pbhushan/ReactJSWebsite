import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbars/navbar";
import Home from "./components/home/home";
import About from "./components/about";
import Product from "./components/products/product";
import Contact from "./components/contact/contact";
import NotFound from "./components/notFound";
import Footer from "./components/footers/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">
          <Switch>
            <Route
              path="/about"
              render={props => {
                return <About {...props} />;
              }}
            />
            <Route
              path="/contact"
              render={props => {
                return <Contact {...props} />;
              }}
            />
            <Route
              path="/product"
              render={props => {
                return <Product {...props} />;
              }}
            />
            <Route
              path="/not-found"
              render={props => {
                return <NotFound {...props} />;
              }}
            />
            <Route
              path="/home"
              render={props => {
                return <Home {...props} />;
              }}
            />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
