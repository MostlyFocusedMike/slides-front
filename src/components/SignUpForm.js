import React from 'react'

class SignUpForm extends React.Component {
  state = {

  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" 
          value={this.state.username}
        /> 
        <label htmlFor="email">Email</label>
        <input id="email" name="email"
          value={this.state.email}
        />
        <label htmlFor="password">Password</label>
        <input id="password" name="password"
          value={this.state.password}
        />
        <label htmlFor="confirmation">Password</label>
        <input id="confirmation" name="confirmation"
          value={this.state.confirmation}
        />
      </form>
    )
  }
}

export default SignUpForm
