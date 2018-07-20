import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <Link to='/' id="nav-logo">Slides</Link>
    <Link to='/'>Home</Link>
    <Link to='/videos'>Videos</Link>
    <Link to='/users'>Users</Link>
    <Link to='/signup'>Sign Up</Link>
    <Link to='/login'>Log In</Link>
  </nav>
)
export default Nav
