import React from 'react'
import SectionForm from './SectionForm';

class SlideForm extends React.Component {
  render() {
    const {videos, videos: {0: {youtube_vid, desc, start}}, sections, slides, slide} = this.props
    console.log("slide", slide);
    console.log("slides", slides);
    return (
      <fieldset>
      <legend>Create Your Slides</legend>
      <div className="slide">
        <div className="slide-data">
          <label htmlFor="start-0">Slide Title:</label>
          <input type="text"
            data-id="0"
            data-key="title"
            className="title"
            name="title-0"
            id="title-0"
            value={youtube_vid}
          />
          <label htmlFor="start-0">Start:</label>
          <input type="text"
            data-id="0"
            data-key="start"
            className="start"
            name="start-0"
            id="start-0"
            value={youtube_vid}
          />
        </div>
        { slides[slide.id].sections.map(sectionId => {
             return (
               <SectionForm
                section={sections[sectionId]}
                handleSectionChange={this.props.handleSectionChange}
               />
             )
          })
        }
      </div>
    </fieldset>
  )
  }
}

export default SlideForm

