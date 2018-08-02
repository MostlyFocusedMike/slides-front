import React from 'react'
import {connect} from 'react-redux'
import SectionForm from './SectionForm';
import SectionFormsContainer from '../../containers/SectionFormsContainer';
import {
  setVideoUser,
  handleLoadPreview,
  handleVideoChange,
  handleSlideChange,
  handleSectionChange,
  handleSlideOrderChange,
  handleFormSubmit,
  newSlide,
  newSection,
} from '../../store';

class SlideForm extends React.Component {
  handleChange = (e) => {
    this.props.handleSlideChange(e, this.props.slide.id)
  }

  handleSlideOrderChange = (e) => {
    const {slide} = this.props
    const newStart = this.hmsToSeconds(slide.timecode)
    this.props.handleSlideOrderChange(slide.id, newStart) 
  }

  hmsToSeconds(input) {
    let parts = input.split(':'),
      seconds = parseInt(parts[parts.length - 1]),
      minutes = parseInt(parts[parts.length - 2]) || 0,
      hours = parseInt(parts[parts.length - 3]) || 0;
    return (hours * 3600 + minutes * 60 + seconds)
  }

  render() {
    const {slide} = this.props
    return (
    <div className="slide">
      <div class="slide-data"  >
      <h2>Slide Info</h2>
        <label htmlFor={`title-${slide.id}`}>Slide Title:</label>
        <input type="text"
          data-id={slide.id}
          data-key="title"
          className="title"
          name={`title-${slide.id}`}
          id={`title-${slide.id}`}
          value={slide.title}
          onChange={this.handleChange}
        />
        <label htmlFor={`timecode-${slide.id}`}>Start:</label>
        <input type="text"
          data-id={slide.id}
          data-key="timecode"
          className="timecode"
          name={`timecode-${slide.id}`}
          id={`timecode-${slide.id}`}
          value={slide.timecode}
          onChange={this.handleChange}
        />
      </div>
      <button onClick={this.handleSlideOrderChange}>Reorder Slides</button>

      <div className="sections">
        <SectionFormsContainer 
          slide={slide}
          sections={this.props.sections}
          newSection={this.props.newSection}
        />
      </div>
    </div>
  )
  }
}
const mapState = (state) => ({
  sections: state.newVideo.entities.sections
})
export default connect(mapState, {
  handleSlideChange,
  handleFormSubmit,
  handleSectionChange,
  handleSlideOrderChange,
  newSection,
})(SlideForm)
