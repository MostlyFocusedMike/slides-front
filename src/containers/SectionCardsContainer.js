import React from 'react' 
import SectionCard from '../components/SectionCard'

const SectionCardsContainer = (props) => {
  const allSections = Object.values(props.entities.sections)
  let selectedSections = allSections.filter(section => {
    return props.slide.sections.includes(section.id)
  })
  // pretty sure sorting isn't necessary, but just to be safe
  const orderThem = (a,b) => a.order - b.order
  selectedSections.sort(orderThem)
  return (
    <div>
    { selectedSections.map(section => {
        return <SectionCard section={section} key={section.id}/>
      })
    }
    </div>
  )
}

export default SectionCardsContainer
