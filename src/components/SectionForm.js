import React from 'react'

class SectionForm extends React.Component {
  // handleChange = (e) => {
  //   console.log(e.target.dataset.key);
  // }
  
  renderInputs = (kind) => {
    switch(kind) {
      case 0: // text
        return (
          <label> Text </label> 
        )
      case 1:
        return (
          <label> Text </label> 
        )
      case 2:
        return (
          <label> Text </label> 
        )
      case 3:
        return (
          <label> Text </label> 
        )
      default:
        return <p>Error loading section</p>
    }
  }

  render() {
    console.log("props", this.props);
    const {section} = this.props
    return (
      <div className="section">
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
       {this.renderInputs(section.kind)}
      </div>
    )
  }
}

export default SectionForm
