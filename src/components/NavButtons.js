import React from "react"

class NavButtons extends React.Component {
  startTimes() {
    return Object.values(this.props.slides)
      .filter(slide => slide.video_id === parseInt(this.props.videoId, 10))
      .map(slide => slide.start)
  }

  findCurrentIndex() {
    let startTimes = this.startTimes()
    let currentSpot = startTimes.find(startTime => this.props.time <= startTime)
    currentSpot = currentSpot === undefined ? 
      startTimes[startTimes.length - 1] : currentSpot
    return startTimes.indexOf(currentSpot) 
  }

  back() {
   let currentIndex = this.findCurrentIndex()
   return currentIndex === 0 ? 0 : this.startTimes()[currentIndex - 1]
  }

  next() {
   let startTimes = this.startTimes()
   let currentIndex = this.findCurrentIndex()
   return startTimes[currentIndex + 1] || startTimes[startTimes.length - 1]
  }

  render() {
    let {jumpTo, playPause} = this.props
    return (
      <div id="nav-buttons">
        <div id="scroll-buttons">
          <button id="back-btn" data-time={this.back()} onClick={jumpTo}>Back</button>
          {this.startTimes()
            .map((startTime,idx) => (
            <button 
                onClick={jumpTo}
                data-time={startTime}
                key={startTime}
              >{idx + 1}
              </button>
            ))
          }
          <button id="next-btn" data-time={this.next()} onClick={jumpTo}>Next</button>
        </div>
        <button id="play-pause" onClick={playPause}>Play/Pause</button>
      </div>
    )
  }
} 

export default NavButtons 
