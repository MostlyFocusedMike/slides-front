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
} from '../../store';

class NewVideoForm extends React.Component {
  
  componentDidUpdate = (prevProps) => {
    if (prevProps.currentUser.id !== this.props.currentUser.id) {
      this.props.setVideoUser(this.props.currentUser)
    }
  }

  render() {
    const {videos, videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.props.newVideo.entities
    console.log(this.props);
    return (
      <div id="big-form">
        {this.props.newVideo.fireRedirect ? 
          <Redirect to={`/videos/${this.state.fireRedirect}`} /> : null
        }
        <VideoPreviewFieldset
          handleVideoChange={this.props.handleVideoChange}
          loadPreview={this.props.newVideo.loadPreview}
          youtube_vid={youtube_vid}
          desc={desc}
        />

        <SlideMakerInputs />
        <SlidesContainer />
        <button onClick={this.handleSubmit}>Create Video Project</button>

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
})(NewVideoForm)
