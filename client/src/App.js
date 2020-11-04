import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
