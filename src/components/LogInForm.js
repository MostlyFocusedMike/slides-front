import React from 'react'

class LogInForm extends React.Component {
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
  render() {
    return (
      <form>
        <label>Hello</label>
      </form>
    )
  }
}

export default LogInForm
