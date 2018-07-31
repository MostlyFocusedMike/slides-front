import React from 'react'
import {connect} from 'react-redux'
import {
  setVideoUser,
  handleLoadPreview,
  handleVideoChange,
  handleSlideChange,
  handleSectionChange,
  handleOrderChange,
  handleFormSubmit,
  newSlide,
  newSection,
} from '../../store';

class SectionForm extends React.Component {
  
  renderInputs = (kind) => {
    const {content, id, desc, "show_desc": showDesc} = this.props.section
    switch(parseInt(kind, 10)) {
      case 0: // text
        return (
          <div>
            <label htmlFor={`text-${id}`}>Paragraph of text</label>
            <textarea 
              rows="4" 
              id={`text-${id}`}
              data-key="content"
              value={content} 
              onChange={this.handleChange}
            />
          </div>
        )
      case 1:
        return (
          <div>
            <label htmlFor={`code-${id}`}>Code Snippet</label>
            <textarea 
              className="code-snippet"
              rows="4" 
              data-key="content"
              id={`code-${id}`}
              value={content} 
              onChange={this.handleChange}
            />
          </div>
        )
      case 2:
        return (
          <div>
            <label htmlFor={`link-${id}`}>Link</label>
            <input
              onChange={this.handleChange}
              id={`link-${id}`}
              value={content} 
              data-key="content"
            /> 
            <label htmlFor={`desc-${id}`}>Describe The Link</label>
            <input
              onChange={this.handleChange}
              id={`desc-${id}`}
              value={desc}
              data-key="desc"
            />
          </div>
        )
      case 3:
        return (
          <div>
            <label htmlFor={`pic-${id}`}>Link To Picture</label>
            <input
              onChange={this.handleChange}
              id={`link-${id}`}
              value={content} 
              data-key="content"
            /> 
            <label htmlFor={`desc-${id}`}>Describe The Picture</label>
            <input
              onChange={this.handleChange}
              id={`desc-${id}`}
              value={desc}
              data-key="desc"
            />
            <label htmlFor={`show-desc-${id}`}>Show description as a caption?</label>
            <input 
              type="checkbox"
              id={`desc-${id}`}
              checked={showDesc} 
              data-key="show_desc"
              onChange={this.handleChange}
            />
          </div>

        )
      default:
        return <p>Error loading section</p>
    }
  }

  renderOrder = () => {
    const {id, kind, order} = this.props.section
    return (
      <select 
        onChange={this.handleOrderChange}
        id={`order-${id}`}
        value={order}
        data-key="order"
      >
        { this.props.sections.map((section, idx) => {
            return <option value={idx + 1}>{idx +1}</option>
          })
        }
      </select>
    )
  }
  handleChange = (e) => {
    this.props.handleSectionChange(e, this.props.section.id)
  }
  handleOrderChange = (e) => {
    let currentPlace = this.props.section.order
    let newPlace = e.target.value 
    let minPlace = Math.min(newPlace, currentPlace)
    let maxPlace = Math.max(newPlace, currentPlace)
    Object.values(this.props.sections).map(section => {
      let mover = newPlace < currentPlace ? 1 : -1
      if (section.id === this.props.section.id) {
        this.props.handleOrderChange(section.id, newPlace)
      } else if (minPlace <= section.order && section.order <= maxPlace) {
        let finalPlace = mover + parseInt(section.order)
        this.props.handleOrderChange(section.id, finalPlace)
      } else {
        console.log("this order is fine:", section.order);
      }
    })


    this.props.handleOrderChange(e, this.props.section.id)
  }
  handleNewSection = (e) => {
    this.props.newSection(e, this.props.slideId)
  }

  render() {
    const {id, kind, order} = this.props.section
    return (
      <div className="section">
        <div className="section-data">
          <label>Type: </label>
          <select 
            onChange={this.handleChange}
            data-key="kind"
          >
            <option value="0">Text</option>
            <option value="1">Code</option>
            <option value="2">Link</option>
            <option value="3">Picture</option>
          </select>
          <label htmlFor={`order-${id}`}>Order: </label>
          {this.renderOrder()}
        </div>
       {this.renderInputs(kind)}
       
      </div>
    )
  }
}

const mapState = (state) => ({
  newVideo: state.newVideo
})

export default connect(mapState, {
  setVideoUser,
  handleLoadPreview,
  handleVideoChange,
  handleSlideChange,
  handleSectionChange,
  handleOrderChange,
  newSection,
})(SectionForm)
