import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'

const UserPage = (props) => {
  return (
    <div>
      <h1>{props.currentUser.username}</h1>
      <button onClick={props.logOut}>Log Out</button> 
    </div>
  )
}

const mapState = (state) => ({
  currentUser: state.currentUser
})

const mapDispatch = (dispatch) => ({
  logOut() {
    dispatch(logOut())
  }
})
export default connect(mapState, mapDispatch)(UserPage)
