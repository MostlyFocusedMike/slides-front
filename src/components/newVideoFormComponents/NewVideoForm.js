import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import YouTube from 'react-youtube';
import SlideForm from './SlideForm';
import VideoPreviewFieldset from './VideoPreviewFieldset';
import {videoAdapter} from '../../adapters';
import {handleLoadPreview} from '../../store';

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
            slides: [0] 
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

  handleLoadPreview = (e) => {
    e.preventDefault()
    this.setState({
      loadPreview: true
    })
  }

  handleVideoChange = (e) => {
    let loadPreview = (e.target.name === "youtube_vid") ?
      e.target.value.length >= 11 : this.state.loadPreview
    this.setState({
      loadPreview,
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
    // this.sectionId is coming from the form constructor, slideId from the actual section
    const {slides, sections} = this.state.entities
    this.setState({
      entities: {
        ...this.state.entities,
        slides: {
          ...slides,
          [slideId]: {
            ...slides[slideId], 
            sections: [...slides[slideId].sections,
                       this.sectionId]
          }
        },
        sections: {
          ...sections,
          [this.sectionId]: {
            id: this.sectionId,
            slide_id: slideId,
            kind: 0,
            order: slides[slideId].sections.length +1,
            content: "",
            desc: "",
            show_desc: false
          }
        }
      }
    })
    this.sectionId++
  }

 componentDidUpdate = (prevProps) => {
   if (prevProps.currentUser.id !== this.props.currentUser.id) {
     this.setState({
        entities: {
          ...this.state.entities,
          videos: {
            0: {
              ...this.state.entities.videos[0],
              user: this.props.currentUser
            }
          }
        }
      })
    }
  }

  render() {
    const {videos, videos: {0: {youtube_vid, desc, start}}, sections, slides} = this.state.entities
    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.fireRedirect ? 
          <Redirect to={`/videos/${this.state.fireRedirect}`} /> : null
        }
        <VideoPreviewFieldset
          handleFieldSubmit={this.handleFieldSubmit}
          handleVideoChange={this.handleVideoChange}
          loadPreview={this.state.loadPreview}
          youtube_vid={youtube_vid}
          desc={desc}
        />
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

const mapDispatch = (dispatch) => ({ // the () give us implicit return
  // addTest: function(num) {
  handleLoadPreview(e) {
    dispatch(handleLoadPreview(e))
  }
})


export default connect(mapState)(NewVideoForm)
