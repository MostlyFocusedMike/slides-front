import React from 'react'
import SectionForm from './SectionForm';

class SlideForm extends React.Component {
  handleChange = (e) => {
    this.props.handleSlideChange(e, this.props.slide.id)
  }
  handleNewSection = (e) => {
    this.props.newSection(e, this.props.slide.id)
  }
  render() {
    const {videos, videos: {0: {youtube_vid, desc, start}}, sections, slides, slide} = this.props
    return (
    <div className="slide">
      <fieldset onChange={this.handleChange} >
      <legend>Slide Info</legend>
        <div className="slide-data">
          <label htmlFor={`title-${slide.id}`}>Slide Title:</label>
          <input type="text"
            data-id={slide.id}
            data-key="title"
            className="title"
            name={`title-${slide.id}`}
            id={`title-${slide.id}`}
            value={slides[slide.id].title}
          />
          <label htmlFor={`start-${slide.id}`}>Start:</label>
          <input type="text"
            data-id={slide.id}
            data-key="start"
            className="start"
            name={`start-${slide.id}`}
            id={`start-${slide.id}`}
            value={slides[slide.id].start}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Sections</legend>
        { slides[slide.id].sections.map(sectionId => {
             return (
               <SectionForm
                section={sections[sectionId]}
                newSection={this.newSection}
                handleSectionChange={this.props.handleSectionChange}
               />
             )
          })
        }
        <button onClick={this.handleNewSection}>New Section</button>
      </fieldset>
    </div>
  )
  }
}

export default SlideForm

