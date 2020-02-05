import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Banner from "./components/Banner/Banner";
import { hot } from 'react-hot-loader/root';
import "./styles/global.scss";

const ReactApp = ReactDOM.render(
  <div>
    <Banner name="Max" />

  </div>,
  document.getElementById("root"),
);


const App = () => ReactApp;
export default hot(App);
