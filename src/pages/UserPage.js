import React from 'react'
import {connect} from 'react-redux'

const UserPage = (props) => {
  return (
    <div>
      <h1>{props.currentUser.username}</h1>
    </div>
  )
}

const mapState = (state) => ({
  currentUser: state.currentUser
})
export default connect(mapState)(UserPage)
