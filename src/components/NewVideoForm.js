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
          desc: "",
          youtube_vid: "",
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
          title: ""
        }
      },
      sections: {
        0: {
          id: 0,
          slide_id: 0,
          kind: 0,
          order: 0,
          content: "",
          desc: "",
          show_desc: false
        }
      }
    }
  }

  handleVideoChange = (e) => {
    this.setState({
      entities: {
        ...this.state.entities,
        videos: {
          ...this.state.entities.videos,
          0: {
            ...this.state.entities.videos[0],
            [e.target.name]: e.target.value
          }
        }
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    console.log(this.state);
    const {videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.state.entities
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset onChange={this.handleVideoChange}>
          <legend>Select the video</legend>
          <label htmlFor="youtube_vid">youtube id (MVP ONLY)</label>
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
