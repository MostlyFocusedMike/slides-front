import React from 'react' 
import SectionForm from '../components/newVideoFormComponents/SectionForm'
import {connect} from 'react-redux'

const SectionsContainer = (props) => {
  const allSections = Object.values(props.sections)
  let selectedSections = allSections.filter(section => {
    return props.slide.sections.includes(section.id)
  })
  const orderThem = (a,b) => a.order - b.order
  selectedSections.sort(orderThem)
  console.log("section props", props);
  return (
    <div>
    <h1>Sections</h1>
    { selectedSections.map(section => {
        return <SectionForm section={section} key={section.id}/>
      })
    }
      <button onClick={this.handleNewSection}>New Section</button>
    </div>
  )
}
const mapState = (state) => ({
  sections: state.newVideo.entities.sections
})
export default connect(mapState)(SectionsContainer)
