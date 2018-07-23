import React from "react"
import Data from "../data"

class NavButtons extends React.Component {
  back = () => {
   const {time} = this.props
   let places = Data.notes.map(note => note.time)
   let currentSpot = places.find(place => time <= place)
   currentSpot = currentSpot === undefined ? places[places.length - 1] : currentSpot
   let currentIndex = places.indexOf(currentSpot) 
   return currentIndex === 0 ? 0 : places[currentIndex - 1]
  }

  next = () => {
   const {time} = this.props
   let places = Data.notes.map(note => note.time)
   let currentSpot = places.find(place => time <= place)
   currentSpot = currentSpot === undefined ? places[places.length - 1] : currentSpot
   let currentIndex = places.indexOf(currentSpot)
   return places[currentIndex + 1] || places[places.length - 1]
  }

  render() {
    return (
      <div className="nav-buttons">
        <button data-time={this.back()} onClick={this.props.jumpTo}>Back</button>
        {Data.notes
          .map((note,idx) => (
            <button 
              onClick={this.props.jumpTo}
              data-time={note.time}
              key={note.time}
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
