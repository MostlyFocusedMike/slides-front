import React from 'react'

class SectionForm extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="section">
        <label>Type: </label>
      </div>
    )
  }
}

export default SectionForm
