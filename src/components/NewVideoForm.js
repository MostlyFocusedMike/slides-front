import React from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube';

class NewVideoForm extends React.Component {
  state = {
    loadPreview: false,
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

  handleLoadPreview = () => {
    this.setState({
      loadPreview: true
    })
  }

  handleVideoChange = (e) => {
    let previewVal = e.target.name === "youtube_vid" ? false : true
    this.setState({
      loadPreview: previewVal,
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

  handleFormSubmit = (e) => {
    e.preventDefault()
  }
  handleFieldSubmit = (e) => {
    // fieldsets seem to not submit forms, and activate inputs
    e.preventDefault()
  }
  render() {
    console.log(this.state);
    const {videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.state.entities
    const opts = {
      height: '240',
      width: '426',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <form onSubmit={this.handleFormSubmit}>
        <fieldset 
          onSubmit={this.handleFieldSubmit}
          onChange={this.handleVideoChange}
        >
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
          
          <div>
          {this.state.loadPreview ? 
          (<YouTube
            videoId={youtube_vid}
            opts={opts}
          /> ) : (
            <button onClick={this.handleLoadPreview}>Load Preview Video</button> 
            )
          }
      

          </div>
        </fieldset>
      

      </form>
    )
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})
export default connect(mapState)(NewVideoForm)
