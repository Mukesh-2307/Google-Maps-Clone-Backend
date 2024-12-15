import React from "react";
// import propType from "prop-types"
import "./navbar.css"

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
