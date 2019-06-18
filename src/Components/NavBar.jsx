import React from "react";
import NavTab from "./NavTab";

const NavBar = () => {
  return (
    <div>
      <NavTab label="Home" to="/" />
      <NavTab label="About US" to="/about" />
      <NavTab label="Resume" to="/resume" />
      <NavTab label="Projects " to="/projects" />
      <NavTab label="Contact " to="/contact" />
    </div>
  );
};

export default NavBar;
