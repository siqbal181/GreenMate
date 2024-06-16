// import React from 'react'
import { SiGoogleearth } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import './Navbar.css';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowModal }) => {
  return (
    <nav className='navbar' onClick={() => setShowModal(true)}>
      <div className='navbar-item'>
        <div className='nav-logo'>
          <SiGoogleearth size={28}/>
        </div>
        <div className='nav-title'>Green Mate</div>
        </div>
      <div className='navbar-item'><CgProfile size={28}/></div>
    </nav>
  )
}

export default Navbar
