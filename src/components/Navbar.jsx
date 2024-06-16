// import React from 'react'
import './Navbar.css';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowModal }) => {
  return (
    <nav className='navbar' onClick={() => setShowModal(true)}>
      Navbar
    </nav>
  )
}

export default Navbar
