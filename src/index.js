import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import Home from "./containers/Home";
import About from "./containers/About";
// import Picture from "./containers/Picture";
import Fileupload from "./containers/Fileupload";

import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//2
// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";

// import App from "./App";
// import Home from "./containers/Home";
// import About from "./containers/About";
// import Picture from "./containers/Picture"

// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

//3
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";

// import App from "./App";
// import Home from "./containers/Home";
// import About from "./containers/About";
// import Picture from "./containers/Picture";

// import "./index.css";

// ReactDOM.render(
//   // <BrowserRouter>
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="/" component={Home} />
//       <Route path="about" component={About} />
//       <Route path="picture" component={Picture} />
//     </Route>
//   </Router>,
//   // </BrowserRouter>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
