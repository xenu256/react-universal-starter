import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import bundle from "./bundle";
import Header from "./components/Header";
import Core from "./components/Core";
import Footer from "./components/Footer";
import store from "./store";
import { injectGlobal } from "styled-components";

// Global styles
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
`;

// Fetch bundles
const Home = bundle(() => import("./containers/Home"));
const About = bundle(() => import("./containers/About"));
const Counter = bundle(() => import("./containers/Counter"));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Core>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/counter" component={Counter} />
            </Switch>
          </Core>
          <Footer />
        </div>
      </Provider>
    );
  }
}