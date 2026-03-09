import React from 'react';
import "../Styles/Nav.css";
import { BiSolidDonateBlood } from "react-icons/bi";

function Nav() {
  return (
    <div className='nav-bg'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Brand Icon and Text */}
          <div className="navbar-brand d-flex align-items-center">
            <BiSolidDonateBlood className='bloodicon'  />
            <a>Give Blood</a>
          </div>

          {/* Hamburger Toggle */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse nav-allign" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
              {/* Changed me-auto to ms-auto to push links to the right if Nav-allign doesn't do it */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;