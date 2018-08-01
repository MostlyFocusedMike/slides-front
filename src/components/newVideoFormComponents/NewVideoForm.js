import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import YouTube from 'react-youtube';
import SlideForm from './SlideForm';
import VideoPreviewFieldset from './VideoPreviewFieldset';
import SlidesContainer from '../../containers/SlidesContainer';
import {videoAdapter} from '../../adapters';
import {
  setVideoUser,
  handleLoadPreview,
  handleVideoChange,
  handleSlideChange,
  handleSectionChange,
  handleFormSubmit,
  newSlide,
  newSection,
} from '../../store';

class NewVideoForm extends React.Component {
  state = {
    slideStart: "0:00"
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
   
  hmsToSeconds(input) {
    let parts = input.split(':'),
      seconds = parseInt(parts[parts.length - 1]),
      minutes = parseInt(parts[parts.length - 2]) || 0,
      hours = parseInt(parts[parts.length - 3]) || 0;
    return (hours * 3600 + minutes * 60 + seconds)
  }

  secondsToHms(d) {
      d = parseInt(d);

      let h = Math.floor(d / 3600);
      let m = Math.floor(d % 3600 / 60);
      let s = Math.floor(d % 3600 % 60);
      if (h) {
        return (h) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
      } else {
        return  m + ":" + ('0' + s).slice(-2);
      }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentUser.id !== this.props.currentUser.id) {
      this.props.setVideoUser(this.props.currentUser)
    }
  }

  render() {
    const {videos, videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.props.newVideo.entities
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.newVideo.fireRedirect ? 
          <Redirect to={`/videos/${this.state.fireRedirect}`} /> : null
        }
        <VideoPreviewFieldset
          handleVideoChange={this.props.handleVideoChange}
          loadPreview={this.props.newVideo.loadPreview}
          youtube_vid={youtube_vid}
          desc={desc}
        />
        <label> Make a new slide at </label>
        <input value={this.state.slideStart} onChange={(e) => this.setState({slideStart: e.target.value})}/> 
        <button onClick={this.props.newSlide}>Make new slide</button>
        <SlidesContainer />
        <button>Create Video Project</button>

      </form>
    )
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser,
  newVideo: state.newVideo
})

export default connect(mapState, {
  setVideoUser,
  handleLoadPreview,
  handleVideoChange,
  handleSlideChange,
  handleSectionChange,
  handleFormSubmit,
  newSlide,
  newSection,
})(NewVideoForm)
