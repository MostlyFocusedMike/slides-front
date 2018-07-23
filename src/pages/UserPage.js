import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'

class UserPage extends React.Component {
  state = {
    user: {
      id: 0,
      username: "loading",
      bio: "loading",
      pic_link: "loading",
      videos: []
    }, 
    shouldLoad: false
  }
  componentDidMount() {
    console.log(this.props.match.params);
    fetch(`http://localhost:3000/users/${this.props.match.params.username}`)
      .then(r=>r.json())
      .then(user => {
        this.setState({
          user,
          shouldLoad: true
        }, () => console.log(this.state))
      })
  }
  render() {
    const {username, bio, "pic_link": picLink} = this.state.user
    if (this.state.shouldLoad) {
      return (
        <div>
          <img src={picLink} />
          <h1>{this.state.user.username}</h1>
          <h2>{this.state.user.bio}</h2>
          <button onClick={this.props.logOut}>Log Out</button> 
        </div>
      )
    } else {
      return null
    }
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
