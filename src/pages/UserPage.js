import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'
import {userAdapter} from '../adapters'     
// we need direct access to the adapter, 
// since we areusing it to edit local state

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}, 
      shouldLoad: false
    }
  }
  componentDidMount() {
    userAdapter.getOne(this.props.match.params.username)
      .then(user => {
        this.setState({
          user,
          shouldLoad: true
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProfile = this.props.match.params.username
    if (prevState.user.username !== currentProfile) {
      userAdapter.getOne(currentProfile)
        .then(user => this.setState({ user }))
    }
  }
  render() {
    const {username, bio, "pic_link": picLink, videos} = this.state.user
    // we won't load anything until our fetch is complete
    if (this.state.shouldLoad) {
      return (
        <div>
          <img src={picLink} />
          <h1>{username}</h1>
          <h2>{bio}</h2>
          {this.props.currentUser.username === username ? (
              <button onClick={this.props.logOut}>Log Out</button> 
            ) : null
          }
          {videos.map(video => {
            return <img src={`http://img.youtube.com/vi/2g811Eo7K8U/mqdefault.jpg`} />

          })
          }
        </div>
      )
    } else {
      return null
    }
  }
}
      // <img src={`http://img.youtube.com/vi/2g811Eo7K8U/mqdefault.jpg`} />}

const mapState = (state) => ({
  currentUser: state.currentUser
})

const mapDispatch = (dispatch) => ({
  logOut() {
    dispatch(logOut())
  }
})
export default connect(mapState, mapDispatch)(UserPage)
