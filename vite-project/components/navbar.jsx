import React from "react";
import ReactDOM from "react-dom/client";

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar_left">
        <a className="navbar_link" href="#">
          Nicholas Woode-Smith
        </a>
      </p>
      <div className="navbar_right">Switch goes here</div>
    </div>
  );
}

export default Navbar;
