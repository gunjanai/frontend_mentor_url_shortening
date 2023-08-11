import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__left__side__container">
        <h1 className="navbar__item">Shortly</h1>
        <Link className="navbar__item" to="/">Features</Link>
        <Link className="navbar__item" to="/">Pricing</Link>
        <Link className="navbar__item" to="/">Resources</Link>
      </div>
      <div className="navbar__right__side__container">
        <button className="navbar__item login__button">Login</button>
        <button className="navbar__item signUp__button">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
