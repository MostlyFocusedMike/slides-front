import React from 'react'
import {connect} from 'react-redux'
import {
  handleSectionChange,
  handleOrderChange,
  deleteSection
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
        onChange={this.selectOrderChange}
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

  selectOrderChange = (e) => {
    this.reorder(parseInt(this.props.section.order), parseInt(e.target.value))
  }

  upDownOrderChange = (e) => {
    const {order} = this.props.section,
      direction = parseInt(e.target.dataset.direct)
    this.reorder(parseInt(order), parseInt(order + direction))
  }
  reorder = (currentPlace, newPlace) => {
    const {handleOrderChange, "section": currentSection, sections} = this.props
    let mover = newPlace < currentPlace ? 1 : -1,
      minMax = [currentPlace, newPlace].sort((a,b) => a - b)
    Object.values(sections).map(section => {
      if (section.id === currentSection.id) {
        handleOrderChange(section.id, newPlace)
      } else if (minMax[0] <= section.order && section.order <= minMax[1]) {
        handleOrderChange(section.id, mover + parseInt(section.order))
      } 
    })
  }

  handleDeleteSection = () => {
    const {handleOrderChange, "section": currentSection, sections, slideId} = this.props
    Object.values(sections).map(section => {
      if (section.order > currentSection.order) {
        handleOrderChange(section.id, parseInt(section.order -1))
      }
    })
    this.props.deleteSection(slideId, currentSection.id)
  }

  render() {
    const {id, kind, order} = this.props.section
    let max = Object.values(this.props.sections).sort((a,b) => b.order - a.order)[0].order
    console.log("max", max);
    console.log("order", order);
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
          {order > 1 ? 
            <button 
              data-direct="-1" onClick={this.upDownOrderChange}
            >Move Up</button> : null
          }
          {order < max ? 
            <button 
              data-direct="1" onClick={this.upDownOrderChange}
            >Move Down</button> : null
          }
        </div>
        {this.renderInputs(kind)}
        <button onClick={this.handleDeleteSection}>Delete this section</button>
      </div>
    )
  }
}

const mapState = (state) => ({
  newVideo: state.newVideo
})

export default connect(mapState, {
  handleSectionChange, 
  handleOrderChange,
  deleteSection
})(SectionForm)
