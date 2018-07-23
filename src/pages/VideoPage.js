import React from 'react'
import {connect} from 'react-redux'
import {loadVideo} from '../store'
import VideoShowPlayer from '../components/VideoShowPlayer'

class VideoPage extends React.Component {
  state = {
    playState: 0,
    video: {},
    time: 0
  }

  handlePlayState = (e) => {
    this.setState({
      playState: e.data,
    }, () => this.logTime(e))
    console.log(e.data);
  }

  logTime = (e) => {
    if (this.state.playState === 1) {
      this.setState({
        time: Math.floor(e.target.getCurrentTime())
      }) // immediately fix the timecode 
      this.time = setInterval(() => { //check each escond the video plays 
        this.setState({
          time: Math.floor(e.target.getCurrentTime())
        }, () => console.log(this.state.time))
      }, 1000)
    } else {
      clearInterval(this.time)
    }
  }
  
  // e.target from the Player component is the only way to access the video 
  // so we need to bring it up to the top state as soon as it's loaded 
  // that way other components will have access to it
  setVideo = (e) => {
    this.setState({
      video: e.target
    })
  }
  jumpTo = (e) => {
    // doesn't play nice with string
    let place = parseInt(e.target.dataset.time, 10)
    this.state.video.seekTo(place, true) // time in seconds to go to, and whether you want to allow it to go into unbuffered territory
    this.setState({ time: place })
  }

  playPause = () => {
    this.state.playState === 1 ?  this.state.video.pauseVideo() 
      : this.state.video.playVideo()
  }

  play = () => {
    this.state.video.playVideo()
  }

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

