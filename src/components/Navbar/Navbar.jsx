import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='navbar'>
    <Link to="/problemset/all/" className='navItemsL'>All problems</Link>
    <Link to="/signup" className='navItemsR'>Signup</Link>
    <Link to="/login" className='navItemsR'>Login</Link>
    </div>

    </>
  )
}

export default Navbar