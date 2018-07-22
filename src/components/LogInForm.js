import React from 'react'
import {Redirect} from 'react-router'
import { connect } from 'react-redux';
import {logIn} from '../store'


class LogInForm extends React.Component {
  constructor() {
    super() 

    this.initState = {
      user: {
        username: "",
        password: ""
      }
    }
    this.state = this.initState
  }

  handleChange = (e) => {
    this.setState({
      user: {
      ...this.state.user,
      [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logIn(this.state)
  }

  handleClear = (e) => {
    e.preventDefault()
    this.setState(this.initState)
  }

  render() {
    return (
      <form
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit}
      >
        <label>Username</label>
        <input 
          type="text"
          name="username"
          id="username"
          value={this.state.user.username}
        />
        <label>Password</label>
        <input 
          type="text"
          name="password"
          id="password"
          value={this.state.user.password}
        />
        <button>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}
const mapState = (state) => ({
  currentUser: state.currentUser
})
const mapDispatch = (dispatch) => ({ // the () give us implicit return
  // addTest: function(num) {
  logIn(user) {
    console.log("the form is about to dispatch log in");
    dispatch(logIn(user))
  }
})


export default connect(mapState, mapDispatch)(LogInForm)
