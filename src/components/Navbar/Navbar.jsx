import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">
          Home
        </Link>
        <Link to="/skills" className="desktopMenuListItem">
          About
        </Link>
        <Link to="/works" className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="/project" className="desktopMenuListItem">
          Projects
        </Link>
        <Link to="/contact" className="desktopMenuListItem">
          <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopImg" />
            Contact ME
          </button>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;






