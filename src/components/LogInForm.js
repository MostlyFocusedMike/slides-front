import React from 'react'

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

export default LogInForm
