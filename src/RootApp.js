import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Home from "./home/HomeView";

export const store = createStore();

export default class RootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
