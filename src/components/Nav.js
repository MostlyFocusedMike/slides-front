import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/videos'>Videos</Link></li>
      <li><Link to='/users'>Users</Link></li>

      <li><Link to='/signup'>Sign Up</Link></li>
      <li><Link to='/login'>Log In</Link></li>
    </ul>
  </nav>
)
export default Nav
