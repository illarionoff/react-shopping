import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler mr-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <button>
            <i className="fas fa-cart-plus">Cart</i>
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
