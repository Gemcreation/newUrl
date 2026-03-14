import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar container">
      <div className="navbar__logo">
        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Shortly Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="navbar__links-desktop">
        <ul className="navbar__nav-items">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
        <div className="navbar__user-actions">
          <a href="#login" className="login-link">Login</a>
          <button className="btn">Sign Up</button>
        </div>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Mobile Navigation Overlay */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
