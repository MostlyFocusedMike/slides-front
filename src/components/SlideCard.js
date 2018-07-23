import React from "react" 
import Data from "../data"
import SectionsContainer from '../containers/SectionsContainer'

class SlideCard extends React.Component {

  pickSlide = () => {
    let {time} = this.props
    const {slides, videos} = this.props.realData
    const slideIds = videos[this.props.videoId].slides
    let slideId = slideIds.find((foo, index, ids) => {
      // the current slideID should be the one right before the first slide whose 
      // start time is greater than the current video time
      return time < slides[(ids[index + 1] || ids[ids.length -1])].start
    })
    return slideId ? slides[slideId] : slides[slideIds[slideIds.length - 1]]
  }

  displaySlide = () => {
    let slide = this.pickSlide() 
    return (
      <div class="slide">
        <h1>{slide.title}</h1>
        <SectionsContainer slide={slide} realData={this.props.realData} />
      </div>
    )
  }

  render() {
    return this.displaySlide() 
  }
}

export default SlideCard 
