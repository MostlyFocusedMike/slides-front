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

  handleChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    if (e.target.dataset.key === "timecode") {
      // if (!value.match(":")) {
      //   value = this.secondsToHms(value)
      // }
      this.setState({showStartSave: true})
    }
    this.props.handleSlideChange(e.target.dataset.key, value, this.props.slide.id)
  }

  handleSlideOrderChange = (e) => {
    e.preventDefault()
    this.handleChange(e)
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
