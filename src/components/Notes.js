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

  pickSlide = () => {
    let vid = this.props.realData.self[this.props.videoId]
    let {time} = this.props
    const {slides, sections} = this.props.realData
    let selectedSlideId = vid.slides.find((slideId, idx, slideIds) => {
      let nextIndex = slideIds.indexOf(slideId) + 1
      let nextSlideId = slideIds[nextIndex] || slideIds[slideIds.length -1]
      let nextSlide = slides[nextSlideId]
      return time < nextSlide.start
    })
    return selectedSlideId ? slides[selectedSlideId] : slides[vid.slides[vid.slides.length - 1]]
  }

  displayNote = () => {
    let note = this.pickNote() 
    console.log("selected slide", this.pickSlide());
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
