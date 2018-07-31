import React from 'react' 
import {connect} from 'react-redux' 
import SlideForm from '../components/newVideoFormComponents/SlideForm'

const SlidesContainer = (props) => {
  const orderThem = (a,b) => a.start - b.start
  const sortedSlides = Object.values(props.slides).sort(orderThem)
  return (
    <div>
      { sortedSlides.map(slide => {
           return (
             <SlideForm
              key={slide.id}
              slide={slide}
             />
           )
        })
      }
    </div>
  )
}

const mapState = (state) => ({
  slides: state.newVideo.entities.slides
})

export default connect(mapState)(SlidesContainer)

