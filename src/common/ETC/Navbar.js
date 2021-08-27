import React from 'react';
import img1 from '../../assets/logo.svg';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='div-header'>
        <div className='div-svg'>
          <img className="navbar-logo" src={img1} alt=" "/>  
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <button className='button-header'>Log out</button>
        </div>
      </div>
    </nav>
    /*    <nav className="navbar">
         <nav className="navbar-left">
             <img className="navbar-logo" src={img1} alt=" "/>  
         </nav>
         <div className="navbar-right">
             <button className="navbar-button">Login</button>
         </div>
       </nav> */
  )
}

export default Navbar;