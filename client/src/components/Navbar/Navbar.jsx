import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a id="name" className="navbar-brand" href="./index.html">Jamie Jones</a>
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
          <li className="nav-item active">
          <NavLink to="/contact">
              Contact
            </NavLink>
            {/* <a className="nav-link" href="./contact.html"
              >Contact <span className="sr-only">(current)</span></a
            > */}
          </li>
          <li className="nav-item">
          <NavLink to="/portfolio">
              Portfolio
            </NavLink>
            {/* <a className="nav-link" href="./portfolio.html">Portfolio</a> */}
          </li>
          <li className="nav-item">
          <NavLink to="/about">
              About Me
            </NavLink>
            {/* <a className="nav-link" href="./index.html">About Me</a> */}
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            ></a>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;