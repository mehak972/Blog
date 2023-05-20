import React from 'react';
import image from '../Images/Logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={image} alt="image" width="50" height="40"/>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
