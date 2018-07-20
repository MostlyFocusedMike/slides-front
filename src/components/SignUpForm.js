import React from 'react'

class SignUpForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmation: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onChange={this.onChange}>
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
        <label htmlFor="confirmation">Password Confirmation</label>
        <input 
          id="confirmation" 
          name="confirmation"
          type="password"
          value={this.state.confirmation}
        />
      </form>
    )
  }
}

export default SignUpForm
