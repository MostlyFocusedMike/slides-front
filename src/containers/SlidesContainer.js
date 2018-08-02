import React from 'react' 
import {connect} from 'react-redux' 
import SlideForm from '../components/newVideoFormComponents/SlideForm'

const SlidesContainer = (props) => {
  const orderThem = (a,b) => b.start - a.start
  const sortedSlides = Object.values(props.slides).sort(orderThem)
  console.log("new slide made");
  return (
    <div>
      { sortedSlides.map((slide, idx) => {
           return (
             <SlideForm
              key={idx}
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

