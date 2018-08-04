import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'
import {userAdapter} from '../adapters'     
import VideoPreviewsContainer from '../containers/VideoPreviewsContainer'     
import ProfileInfoCard from '../components/ProfileInfoCard'     
// we need direct access to the adapter, 
// since we are using it to edit local state

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {user: {}, shouldLoad: false}
  }
  componentDidMount() {
    userAdapter.getOne(this.props.match.params.username)
      .then(user => {
        this.setState({ user, shouldLoad: true })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProfile = this.props.match.params.username
    if (prevState.user.username !== currentProfile) {
      userAdapter.getOne(currentProfile)
        .then(user => this.setState({user}))
    }
  }
  render() {
    const {user, shouldLoad} = this.state
    // we won't load anything until our fetch is complete
    return (
      shouldLoad ?
        <div id="user-page">
          <div id="user-stuff">
            <ProfileInfoCard user={user} />
            {this.props.currentUser.username === user.username ? 
              <button id="log-out-btn" onClick={this.props.logOut}>Log Out</button> : null
            }
          </div>
          <VideoPreviewsContainer user={user} />
        </div> : null
    )
  }
}

const mapState = (state) => ({currentUser: state.currentUser})

export default connect(mapState, {logOut})(UserPage)
