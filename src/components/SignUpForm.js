import React from 'react'
import {userAdapter} from '../adapters'

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
    console.log(this.state);
    userAdapter.create(this.state)
      .then(console.log)
    this.handleClear(e)
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
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          name="username" 
          type="text"
          value={this.state.username}
        /> 
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email"
          type="text"
          value={this.state.email}
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          name="password"
          type="password"
          value={this.state.password}
        />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input 
          id="password_confirmation" 
          name="password_confirmation"
          type="password"
          value={this.state.confirmation}
        />
        <button>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default SignUpForm
