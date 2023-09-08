import React from "react";
import { Link } from "./../util/router";

function Navbar(props) {
  return (
    <header className="py-5 px-4 bg-gray-100">
      <div className="container flex flex-col flex-wrap items-center mx-auto md:flex-row">
        <Link to="/" className="mb-3 md:mb-0">
          Logo
        </Link>
        <nav className="flex flex-wrap items-center md:ml-auto">
          <Link to="/about" className="ml-5">
            About
          </Link>
          <Link to="/pricing" className="ml-5">
            Pricing
          </Link>
          <a className="ml-5" href="https://app.mysite.com/auth/signin">
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
