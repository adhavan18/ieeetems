import React, { useState } from "react";
import "./Navbar.css";
import logo from '../assets/tems.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" />
        <div className="brand-name">
          <span className="brandName">IEEE TEMS</span>
          <span className="fullForm">Technology & Engineering Management Society</span>
        </div>
      </div>

      {/* <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div> */}

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="Events">Events</a></li>
        <li><a href="Our Team">Our Team</a></li>
        <li><a href="About Us">About Us</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Navbar;