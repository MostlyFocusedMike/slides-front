import React from 'react'
import {connect} from 'react-redux'
import {loadVideo} from '../store'
import VideoShowPlayer from '../components/VideoShowPlayer'



class VideoPage extends React.Component {
  componentDidMount() {
    this.props.loadVideo(this.props.match.params.id)
  }
  render() {
    console.log(this.props.match);
    console.log(this.props.video);
    return (
      <div>
        <h1>VideoPage</h1>
        <VideoShowPlayer />
      </div>
    )
  }
}
const mapState = (state) => ({
  currentUser: state.currentUser,
  video: state.video
})

const mapDispatch = (dispatch) => ({
  loadVideo(videoId) {
    dispatch(loadVideo(videoId))
  }
})
export default connect(mapState, {loadVideo})(VideoPage)

