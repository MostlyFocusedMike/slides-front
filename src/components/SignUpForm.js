import React from 'react'

class SignUpForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmation: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
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
        <label htmlFor="confirmation">Password Confirmation</label>
        <input 
          id="confirmation" 
          name="confirmation"
          type="password"
          value={this.state.confirmation}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default SignUpForm
