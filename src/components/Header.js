import React from "react";
import { Link } from "gatsby";
import logo from "../img/ozzitech-logo.svg";


const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Kaldi" style={{ width: "281px" }} />
        </Link>
      </div>
    </section>
  );
}

export default Header;