import React from "react" 
import Data from "../data"

class Notes extends React.Component {

  handleClick = () => {
    this.props.jumpTo(10)
  }

  pickSlide = () => {
    let {time} = this.props
    const slideIds = this.props.realData.videos[this.props.videoId].slides
    const {slides} = this.props.realData
    let selectedSlideId = slideIds.find((slideId, index, ids) => {
      return time < slides[(ids[index + 1] || ids[ids.length -1])].start
    })
    return selectedSlideId ? slides[selectedSlideId] : slides[slideIds[slideIds.length - 1]]
  }

  displaySlide = () => {
    let slide = this.pickSlide() 
    return <h1>{slide.title}</h1>
  }

  render() {
    console.log(this.props);
    return (
      <div> 
        {this.displaySlide()}
      </div>
    )
  }
}

export default Notes 
