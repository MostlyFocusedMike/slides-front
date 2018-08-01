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
    <div>
    <h1>Sections</h1>
    { selectedSections.map(section => {
        return (
          <SectionForm 
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
