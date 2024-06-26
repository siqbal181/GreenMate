// import React from 'react'
import './BottomBar.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
const size = 38;

const BottomBar = () => {
  return (
    <footer className='bottom-nav'>
      <div className="bottom-nav-item">
        <Link to='/' className='nav-link'><IoHomeOutline size={size} /></Link>
      </div>
      <div className="bottom-nav-item">
        <Link to='/daily-planning' className='nav-link'><BsCardChecklist size={size} /></Link>
      </div>
      <div className="bottom-nav-item">
        <Link to='/leaderboard' className='nav-link'><MdOutlineLeaderboard size={size} /></Link>
      </div>
      <div className="bottom-nav-item">
        <Link to='/achievements' className='nav-link'><LiaAwardSolid size={size} /></Link>
      </div>
    </footer>
  )
}

export default BottomBar
