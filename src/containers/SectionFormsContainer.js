import React from 'react' 
import SectionForm from '../components/newVideoFormComponents/SectionForm'

const SectionsContainer = (props) => {
  const allSections = Object.values(props.sections)
  let selectedSections = allSections.filter(section => {
    return props.slide.sections.includes(section.id)
  })
  const orderThem = (a,b) => parseInt(a.order, 10) - parseInt(b.order, 10)
  selectedSections.sort(orderThem)

  const handleNewSection = () => {
    props.newSection(props.slide.id) 
  }

  return (
    <div class="section-forms-container">
    { selectedSections.map(section => {
        return (
          <SectionForm 
            slideId={props.slide.id} 
            section={section} 
            sections={selectedSections}
            key={section.id}
          />
        )
      })
    }
      <button onClick={handleNewSection}>New Section</button>
    </div>
  )
}

export default SectionsContainer
