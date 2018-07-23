import React from "react" 
import Data from "../data"

class Notes extends React.Component {

  handleClick = () => {
    this.props.jumpTo(10)
  }

  pickNote = () => {
   const {time} = this.props
   let obj = Data.notes.find(note => {
     let nextIndex = Data.notes.indexOf(note) + 1
     let nextNote = Data.notes[nextIndex] || Data.notes[Data.notes.length -1]
     return time < nextNote.time
   })
   return obj ? obj : Data.notes[Data.notes.length -1]
  }

  displayNote = () => {
    let note = this.pickNote() 
    if (note.type === "code") {
      return <pre>{note.content}</pre>
    } else if (note.type === "text") {
      return <p>{note.content}</p>
    } else {
      return <img src={note.content} alt={note.alt} />
    }
  }

  makeSlides() {
    let vid = this.props.realData.self[this.props.videoId]
    const {slides, sections} = this.props.realData
    return vid.slides.map(slideId => {
      return <h1>{slides[slideId].title}</h1>
    })
  }
  render() {
    console.log(this.props);
    return (
      <div> 
        {this.makeSlides()}
        {this.displayNote()}
      </div>
    )
  }
}

export default Notes 
