import React from 'react'
import {connect} from 'react-redux'
import SectionForm from './SectionForm';
import SectionsContainer from '../../containers/SectionsContainer';
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
    console.log("props here",this.props);
    this.props.handleSlideChange(e, this.props.slide.id)
  }
  render() {
    // const {videos, sections, slides} = this.props.newVideo.entities
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
        <label htmlFor={`start-${slide.id}`}>Start:</label>
        <input type="text"
          data-id={slide.id}
          data-key="start"
          className="start"
          name={`start-${slide.id}`}
          id={`start-${slide.id}`}
          value={slide.start}
          onChange={this.handleChange}
        />
      </div>

      <div className="sections">
        <SectionsContainer 
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
      // </div>
