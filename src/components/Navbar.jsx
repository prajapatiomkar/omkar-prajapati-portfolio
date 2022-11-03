import React from 'react'
import "./Navbar.css"
import { Routes } from "react-router-dom"
export default function Navbar() {
  return (
    
    <div className='navbar'>
      <div className='navbar--logo'>LOGO</div>
      <div className='navbar--links'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Project</a></li>
        </ul>
      </div>
    </div>
  )
}
