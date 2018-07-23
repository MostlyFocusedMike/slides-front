import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../store'
import {userAdapter} from '../adapters'     
import VideoPreviewCard from '../components/VideoPreviewCard'     
import ProfileInfoCard from '../components/ProfileInfoCard'     
// we need direct access to the adapter, 
// since we areusing it to edit local state

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
    const {username, videos} = this.state.user
    // we won't load anything until our fetch is complete
    if (this.state.shouldLoad) {
      return (
        <div>
          <ProfileInfoCard user={this.state.user} />
          {this.props.currentUser.username === username ? (
              <button onClick={this.props.logOut}>Log Out</button> 
            ) : null
          }
          <h2>Here are all of {username}'s projects</h2>
          {videos.map(video => <VideoPreviewCard video={video} key={video.id}/>)}
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
