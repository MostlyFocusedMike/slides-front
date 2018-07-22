import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'

const UserPage = (props) => {
  console.log(props.match.params);
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
    console.log("dispatch log");
    dispatch(logOut())
  }
})
export default connect(mapState, mapDispatch)(UserPage)
