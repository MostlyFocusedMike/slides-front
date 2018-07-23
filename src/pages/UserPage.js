import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'

class UserPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logOut}>Log Out</button> 
      </div>
    )
  }
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
