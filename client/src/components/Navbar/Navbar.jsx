import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a id="name" className="navbar-brand" href="./">Jamie Jones</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <NavLink to="/portfolio">
              Portfolio
            </NavLink>
            {/* <a className="nav-link" href="./portfolio.html">Portfolio</a> */}
          </li>
          
          <li className="nav-item">
          <NavLink to="/">
              About Me
            </NavLink>
            {/* <a className="nav-link" href="./index.html">About Me</a> */}
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;