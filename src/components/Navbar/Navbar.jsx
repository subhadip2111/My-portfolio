import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";
import contactImg from "../../assets/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

      <div
        className={`mobileMenuIcon ${mobileMenuOpen ? "mobileMenuActive" : ""}`}
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
      </div>

      <ul
        className={`mobileMenuList ${mobileMenuOpen ? "mobileMenuActive" : ""}`}
      >
        <li className="mobileMenuListItem">
          <Link to="/">Home</Link>
        </li>
        <li className="mobileMenuListItem">
          <Link to="/skills">About</Link>
        </li>
        <li className="mobileMenuListItem">
          <Link to="/works">Portfolio</Link>
        </li>
        <li className="mobileMenuListItem">
          <Link to="/project">Projects</Link>
        </li>
        <li className="mobileMenuListItem">
          <Link to="/contact">Contact ME</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
