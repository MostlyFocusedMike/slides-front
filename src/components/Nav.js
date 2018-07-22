import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const loggedIn = !!localStorage.token
  console.log(loggedIn);
  return (  
    <nav>
      <Link to='/' id="nav-logo">Slides</Link>
      <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link>
      <Link to='/users'>Users</Link>
      {loggedIn ? (
        <div>
          <Link to='/'>Profile</Link>
        </div>
      ) : (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      )}
    </nav>
  )
}
export default Nav
