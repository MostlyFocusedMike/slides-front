import React from 'react'
import {Redirect} from 'react-router'
import { connect } from 'react-redux';

import {createUser} from '../store'


class SignUpForm extends React.Component {
  constructor() {
    super()

    this.initState = {
      user: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
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
    this.props.createUser(this.state)
  }

  handleClear = (e) => {
    e.preventDefault()
    this.setState(this.initState)
  }


  render() {
    const {currentUser} = this.props
    return (
      <form 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit}
      >
        {currentUser.id ? <Redirect to={`/users/${currentUser.id}`} /> : null}
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          name="username" 
          type="text"
          value={this.state.user.username}
        /> 
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email"
          type="text"
          value={this.state.user.email}
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          name="password"
          type="password"
          value={this.state.user.password}
        />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input 
          id="password_confirmation" 
          name="password_confirmation"
          type="password"
          value={this.state.user.password_confirmation}
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
  createUser(user) {
    console.log("the form is about to dispatch create");
    dispatch(createUser(user))
  }
})

export default connect(mapState, mapDispatch)(SignUpForm)
