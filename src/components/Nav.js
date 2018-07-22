import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
  const loggedIn = !!localStorage.token
  return (  
    <nav>
      <Link to='/' id="nav-logo">Slides</Link>
      <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link>
      <Link to='/users'>Users</Link>
      {loggedIn ? (
        <div>
          <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
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

const mapState = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapState)(Nav)
