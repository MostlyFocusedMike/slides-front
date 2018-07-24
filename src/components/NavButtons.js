import React from "react"

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

  findCurrentIndex() {
    const startTimes = this.startTimes()
    const {time} = this.props
    let currentSpot = startTimes.find(startTime => time <= startTime)
    currentSpot = currentSpot === undefined ? startTimes[startTimes.length - 1] : currentSpot
    return startTimes.indexOf(currentSpot) 
  }
  back = () => {
   let currentIndex = this.findCurrentIndex()
   return currentIndex === 0 ? 0 : this.startTimes()[currentIndex - 1]
  }

  next = () => {
   let startTimes = this.startTimes()
   let currentIndex = this.findCurrentIndex()
   return startTimes[currentIndex + 1] || startTimes[startTimes.length - 1]
  }

  render() {
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
