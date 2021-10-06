import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <h1>EPIC</h1>
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
