import React from "react" 
import Data from "../data"

class Notes extends React.Component {

  handleClick = () => {
    this.props.jumpTo(10)
  }

  pickNote = () => {
   const {time} = this.props
   let obj = Data.notes.find(note => time <= note.time)
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

  render() {
    return (
      <div> 
        {this.displayNote()}
      </div>
    )
  }
}

export default Notes 
