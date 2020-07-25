import React from 'react';
import './Nav.css';
import logo from './gan-logo.png';

function Nav() {
  return (
    <div className="navbar">
      <div className="nameplate">
        <a href="/" className="click-logo">
          <img src={logo} alt="Gan Logo" className="logo" />
        </a>
        <h1>Gan Preschool</h1>
      </div>
      <div className="links-wrapper">
        <ul className="nav-links">
          <li> <a href="/">HOME</a></li>
          <li> <a href="/program">PROGRAM</a></li>
          <li> <a href="staff">STAFF</a></li>
          <li> <a href="enrollment">ENROLLMENT</a></li>
          <li> <a href="photo-gallery">PHOTO GALLERY</a></li>
          <li> <a href="contact">CONTACT US</a></li>
        </ul>
      </div>
      </div>
  );
}

export default Nav;
