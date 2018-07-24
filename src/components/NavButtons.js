import React from "react"
import Data from "../data"

class NavButtons extends React.Component {
  constructor(props) {
    super(props)
  }
  
  startTimes() {
    let slides = Object.values(this.props.realData.slides).filter(slide => {
     return slide.video_id === parseInt(this.props.videoId, 10)
    })
    return slides.map(slide => slide.start)
  }

  navButtonHelper() {
   const {time} = this.props
   let places = Data.notes.map(note => note.time)
   let currentSpot = places.find(place => time <= place)
   currentSpot = currentSpot === undefined ? places[places.length - 1] : currentSpot
   return places.indexOf(currentSpot) 
  }
  back = () => {
   const {time} = this.props
   let places = Data.notes.map(note => note.time)
   let currentIndex = this.navButtonHelper()
   return currentIndex === 0 ? 0 : places[currentIndex - 1]
  }

  next = () => {
   const {time} = this.props
   let places = Data.notes.map(note => note.time)
   let currentIndex = this.navButtonHelper()
   return places[currentIndex + 1] || places[places.length - 1]
  }

  render() {
    console.log(this.props.realData);
    this.startTimes()
    return (
      <div className="nav-buttons">
        <button data-time={this.back()} onClick={this.props.jumpTo}>Back</button>
        {this.startTimes()
          .map((startTime,idx) => (
          <button 
              onClick={this.props.jumpTo}
              data-time={startTime}
              key={startTime}
            >{idx + 1}
            </button>
          ))
        }
        <button onClick={this.props.playPause}>Play/Pause</button>
        <button data-time={this.next()} onClick={this.props.jumpTo}>Next</button>
      </div>
    )
  }
} 

export default NavButtons 
