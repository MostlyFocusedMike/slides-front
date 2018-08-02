import React from 'react'
import {connect} from 'react-redux'
import SectionForm from './SectionForm';
import SectionFormsContainer from '../../containers/SectionFormsContainer';
import {
  handleSlideChange,
  handleSlideStartChange,
  newSection,
  deleteSlide,
  resetNewVideo
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

  handleDeleteSlide = (e) => {
    e.preventDefault()
    console.log("dleelte props", this.props);
    const {deleteSlide, slide} = this.props
    deleteSlide(slide.id)
  }

  componentWillUnmount() {
    this.props.resetNewVideo()    
  }


  render() {
    const {slide} = this.props
    return (
    <div className="slide">
      <form 
      onSubmit={this.handleSlideOrderChange}
      class="slide-data"  >
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
        <div id="slide-buttons">
          { this.props.slidesLength > 1 ? 
            <button 
              onClick={this.handleDeleteSlide}
            > Delete Slide </button> : null
          }
          {this.state.showStartSave ? 
            <button>Save New Start</button> : null 
          }
        </div>
      </form>

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
  sections: state.newVideo.entities.sections,
  slidesLength: state.newVideo.entities.videos[0].slides.length
})
export default connect(mapState, {
  handleSlideChange,
  handleSlideStartChange,
  newSection,
  deleteSlide,
  resetNewVideo
})(SlideForm)
