import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import YouTube from 'react-youtube';
import SlideForm from './SlideForm';
import VideoPreviewFieldset from './VideoPreviewFieldset';
import SlideMakerInputs from './SlideMakerInputs';
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
  resetNewVideo
} from '../../store';

class NewVideoForm extends React.Component {
  state={
    fireRedirect: false
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentUser.id !== this.props.currentUser.id) {
      this.props.setVideoUser(this.props.currentUser)
    }
  }

  makeVideo = (e) => {
    e.preventDefault()
    console.log("make vidoe:");
    videoAdapter.create(this.props.newVideo.entities)
      .then(videoId => {
        this.setState({fireRedirect: videoId.id}) 
      })
  }

  componentWillUnmount() {
    this.props.resetNewVideo()
  }

  componentDidMount() {
    this.props.setVideoUser(this.props.currentUser)
  }

  render() {
    let videoId = Object.keys(this.props.newVideo.entities.videos)[0]
    const {videos, videos: {[videoId]: {youtube_vid, desc, start}}, sections, slides} = this.props.newVideo.entities
    return (
      <div id="big-form">
        {this.state.fireRedirect ? 
          <Redirect to={`/videos/${this.state.fireRedirect}`} /> : null
        }
        <div>
          <VideoPreviewFieldset
            handleVideoChange={this.props.handleVideoChange}
            loadPreview={this.props.newVideo.loadPreview}
            youtube_vid={youtube_vid}
            desc={desc}
          />

          <div id="create-project">
            <button id="create-project-btn" onClick={this.makeVideo}>Create Video Project</button>
          </div>
        </div>


        <div id="main-forms">
          <SlideMakerInputs />
          <SlidesContainer />
        </div>

      </div>
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
  resetNewVideo
})(NewVideoForm)
