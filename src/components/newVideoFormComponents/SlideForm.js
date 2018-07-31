import React from 'react'
import {connect} from 'react-redux'
import SectionForm from './SectionForm';
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

class SlideForm extends React.Component {
  handleChange = (e) => {
    e.preventDefault()
    this.props.handleSlideChange(e, this.props.slide.id)
  }
  handleNewSection = (e) => {
    e.preventDefault()
    this.props.newSection(e, this.props.slide.id)
  }
  render() {
    // const {videos, sections, slides} = this.props.newVideo.entities
    const {slide} = this.props
    return (
    <div className="slide">
      <div class="slide-data" onChange={this.handleChange} >
      <h2>Slide Info</h2>
        <label htmlFor={`title-${slide.id}`}>Slide Title:</label>
        <input type="text"
          data-id={slide.id}
          data-key="title"
          className="title"
          name={`title-${slide.id}`}
          id={`title-${slide.id}`}
          value={slide.title}
        />
        <label htmlFor={`start-${slide.id}`}>Start:</label>
        <input type="text"
          data-id={slide.id}
          data-key="start"
          className="start"
          name={`start-${slide.id}`}
          id={`start-${slide.id}`}
          value={slide.start}
        />
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
})(SlideForm)


      // <div className="sections">
      //   <h2>Sections</h2>
      //   { slides[slide.id].sections.map(sectionId => {
      //        return (
      //          <SectionForm
      //           section={sections[sectionId]}
      //           newSection={this.newSection}
      //           handleSectionChange={this.props.handleSectionChange}
      //          />
      //        )
      //     })
      //   }
      //   <button onClick={this.handleNewSection}>New Section</button>
      // </div>
