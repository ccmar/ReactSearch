import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";
const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>;
export default App;
