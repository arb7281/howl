// Navbar.js
import React from 'react';
import logo from "../Images/logo.jpg"
import "../component/NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Navbar() {
  const [isHamburger, setIsHamburger] = useState(true); 

  const handleClick = () => {
    setIsHamburger(!isHamburger);
  };


  return (
    <nav className="navbar navbar-light bg-light custom-navbar">
      
      <img src={logo} alt='Howl' className='image'/>
      <div className={`navbar-toggler custom ${isHamburger ? '' : 'crossed'}`} type="button"  onClick={handleClick}>
          <span className="line"></span>
          <span className="line"></span>
        </div> 
    </nav>
  );
}

export default Navbar;
