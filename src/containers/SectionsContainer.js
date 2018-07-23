import React from 'react' 

const SectionsContainer = (props) => {
  const allSections = Object.values(props.realData.sections)
  let selectedSections = allSections.filter(section => {
    return props.slide.sections.includes(section.id)
  })
  // pretty sure sorting isn't necessary, but just to be safe
  const orderThem = (a,b) => a.order - b.order
  selectedSections.sort(orderThem)
  return (
    <div>
    {selectedSections.map(section => {
      return <h3>{section.content}</h3>
      })
    }
    </div>
  )
}

export default SectionsContainer
