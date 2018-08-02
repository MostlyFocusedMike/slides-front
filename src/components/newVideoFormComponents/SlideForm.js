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
  handleSlideStartChange,
  handleFormSubmit,
  newSlide,
  newSection,
} from '../../store';

class SlideForm extends React.Component {
  state = {
    showStartSave: false 
  }

  handleChange = (e) => {
    e.preventDefault()
    this.props.handleSlideChange(e, this.props.slide.id)
    if (e.target.dataset.key === "timecode") {
      this.setState({showStartSave: true})
    }
  }

  handleSlideOrderChange = (e) => {
    e.preventDefault()
    this.props.handleSlideChange(e, this.props.slide.id)
    const {slide} = this.props
    const newStart = this.hmsToSeconds(slide.timecode)
    this.props.handleSlideStartChange(slide.id, newStart) 
    this.setState({showStartSave: false})
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
    console.log(this.state.showStartSave);
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
        {this.state.showStartSave ? 
          <button onClick={this.handleSlideOrderChange}>Save New Start</button> : null 
        }
      </div>

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
  handleSlideStartChange,
  newSection,
})(SlideForm)
