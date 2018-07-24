import React from 'react'
import {connect} from 'react-redux'

class NewVideoForm extends React.Component {
  state = {
    slideId: 1,
    sectionId: 1, //video id will always be 0 for these forms, but slides and sections need to increment
    entities: {
      videos: {
        0: {
          id: 0,
          desc: "Video description here",
          youtube_vid: "YouTube Id Here",
          topics: {selected: [], others: []},
          user: this.props.currentUser
          // slides: [0] // not sure if i actually need this, we'll see
        }
      },
      slides: {
        0: {
          id: 86,
          video_id: 0,
          start: 0,
          title: "Slide One Title Here"
        }
      },
      sections: {
        0: {
          id: 0,
          slide_id: 0,
          kind: 0,
          order: 0,
          content: "Content here",
          desc: "Description here",
          show_desc: false
        }
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    console.log(this.state);
    const {videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.state.entities
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Select the video</legend>
          <label htmlFor="youtube_vid">youtube id</label>
          <input type="text" 
            name="youtube_vid"
            id="youtube_vid"
            value={youtube_vid}
          />
          <label htmlFor="desc">Video Description</label>
          <input type="text"
            name="desc"
            id="desc"
            value={desc}
          />
          <button>Load Preview Video</button>
        </fieldset>
      </form>
    )
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})
export default connect(mapState)(NewVideoForm)
