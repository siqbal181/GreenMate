// import React from 'react'
import './BottomBar.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";

const BottomBar = () => {
  return (
    <footer className='bottom-bar'>
      <Link to='/' className='nav-link'><IoHomeOutline size={28} /></Link>
      <Link to='/daily-planning' className='nav-link'><BsCardChecklist size={28} /></Link>
      <Link to='/leaderboard' className='nav-link'><MdOutlineLeaderboard size={28} /></Link>
      <Link to='/achievements' className='nav-link'><LiaAwardSolid size={28} /></Link>
    </footer>
  )
}

export default BottomBar
