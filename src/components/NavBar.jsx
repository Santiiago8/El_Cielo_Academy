import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/NavBar.css';

export const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='logo-container'>
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="El Cielo Academy Logo" />
          </Link>
        </div>
        <div className='links-container'>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li 
              className="services-menu" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services">Services</Link>
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <a href="/regular-classes"><li>Regular Classes</li></a>
                  <a href="/workshops"><li>Workshops</li></a>
                  <a href="/shows-and-perfomances"><li>Shows & Performances</li></a>
                </ul>
              )}
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
