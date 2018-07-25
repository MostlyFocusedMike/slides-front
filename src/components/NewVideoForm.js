import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import YouTube from 'react-youtube';
import SlideForm from './SlideForm';
import {videoAdapter} from '../adapters';

class NewVideoForm extends React.Component {
  constructor(props) {
    super(props)
    this.slideId = 1,
    this.sectionId = 1, //video id will always be 0 for these forms, but slides and sections need to increment
    this.state = {
      fireRedirect: null,
      loadPreview: false,
      entities: {
        videos: {
          0: { 
            id: 0,
            desc: "",
            youtube_vid: "",
            topics: {selected: [], others: []},
            user: props.currentUser,
            slides: [0] // not sure if i actually need this, we'll see
          }
        },
        slides: {
          0: {
            id: 0,
            video_id: 0,
            start: 0,
            title: "",
            sections: [0]
          }
        },
        sections: {
          0: {
            id: 0,
            slide_id: 0,
            kind: 0,
            order: 1,
            content: "",
            desc: "",
            show_desc: false
          }
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

  handleSlideChange = (e, id) => {
    this.setState({
      entities: {
        ...this.state.entities,
        slides: {
          ...this.state.entities.slides,
          [id]: {
            ...this.state.entities.slides[id],
            [e.target.dataset.key]: e.target.value
          }
        }
      }
    })
  }
  
  handleSectionChange = (e, id) => {
    const value = e.target.type === 'checkbox' ? 
      e.target.checked : e.target.value;
    this.setState({
      entities: {
        ...this.state.entities,
        sections: {
          ...this.state.entities.sections,
          [id]: {
            ...this.state.entities.sections[id],
            [e.target.dataset.key]: value
          }
        }
      }
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    videoAdapter.create(this.state.entities)
      .then(videoId => {
        this.setState({fireRedirect: videoId.id}) 
      })
  }

  handleFieldSubmit = (e) => {
    // fieldsets seem to not submit forms, and activate inputs
    e.preventDefault()
  }

  newSlide = (e) => {
    e.preventDefault() 
    this.setState({
      entities: {
        ...this.state.entities,
        videos: {
          0: {
            ...this.state.entities.videos[0],
            slides: [...this.state.entities.videos[0].slides,
                    this.slideId]
          }
        },
        slides: {
          ...this.state.entities.slides,
          [this.slideId]: {
            id: this.slideId,
            video_id: 0,
            start: this.slideId,
            title: "",
            sections: []
          }
        }
      }
    })
    this.slideId++
  }

  newSection = (e, slideId) => {
    e.preventDefault()
    this.setState({
      entities: {
        ...this.state.entities,
        slides: {
          ...this.state.entities.slides,
          [slideId]: {
            ...this.state.entities.slides[slideId], 
            sections: [...this.state.entities.slides[slideId].sections,
                       this.sectionId]
          }
        },
        sections: {
          ...this.state.entities.sections,
          [this.sectionId]: {
            id: this.sectionId,
            slide_id: slideId,
            kind: 0,
            order: 1, // needs to become dynamic somehow
            content: "",
            desc: "",
            show_desc: false
          }
        }
      }
    })
    this.sectionId++
  }

  render() {
    console.log(this.state);
    const {videos, videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.state.entities
    const opts = {
      height: '240',
      width: '426',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.fireRedirect ? 
          <Redirect to={`/videos/${this.state.fireRedirect}`} /> : null
        }
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
            ( <YouTube
                videoId={youtube_vid}
                opts={opts}
              /> 
            ) : (
              <button onClick={this.handleLoadPreview}>Load Preview</button> 
            )
          }
          </div>
        </fieldset>
        { videos[0].slides.map(slideId => {
             return (
               <SlideForm 
                videos={videos}
                slide={slides[slideId]}
                slides={slides}
                sections={sections}
                handleSectionChange={this.handleSectionChange}
                handleSlideChange={this.handleSlideChange}
                newSection={this.newSection}
               />
             )
          })
        }
        <button onClick={this.newSlide}>Make new slide</button>
        <button>Create Video Project</button>

      </form>
    )
  }
}

const mapState = (state) => ({
  currentUser: state.currentUser
})
export default connect(mapState)(NewVideoForm)
