const initState = {
      fireRedirect: null,
      loadPreview: false,
      slideId = 1,
      sectionId = 1, //video id will always be 0 for these forms, but slides and sections need to increment
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
function newVideoReducer(state = initState, action) {
  switch(action.type) {
    case types.HANDLE_LOAD_PREVIEW: 
      action.e.preventDefault() 
      return ({loadPreview: true})

    case types.HANDLE_VIDEO_CHANGE:
      let loadPreview = (action.e.target.name === "youtube_vid") ?
        action.e.target.value.length >= 11 : state.loadPreview
      return ({
        loadPreview,
        entities: {
          ...state.entities,
          videos: {
            ...state.entities.videos,
            0: {
              ...state.entities.videos[0],
              [e.target.name]: e.target.value
            }
          }
        }
      })
    }

    case types.HANDLE_SLIDE_CHANGE: 
      const {e, id} = action
      return ({
        entities: {
          ...state.entities,
          slides: {
            ...state.entities.slides,
            [id]: {
              ...state.entities.slides[id],
              [e.target.dataset.key]: e.target.value
            }
          }
        }
      })

  case types.HANDLE_SECTION_CHANGE:
    const {e, id} = action
    const value = e.target.type === 'checkbox' ? 
      e.target.checked : e.target.value;
    return ({
      entities: {
        ...state.entities,
        sections: {
          ...state.entities.sections,
          [id]: {
            ...state.entities.sections[id],
            [e.target.dataset.key]: value
          }
        }
      }
    })

  case types.HANDLE_FORM_SUBMIT:
    return ({
      fireRedirect: action.fireRedirect
    })

  case types.NEW_SLIDE:
    currentSlideId = state.slideId
    return ({
      entities: {
        ...state.entities,
        videos: {
          0: {
            ...state.entities.videos[0],
            slides: [...state.entities.videos[0].slides,
                    currentSlideId]
          }
        },
        slides: {
          ...state.entities.slides,
          [state.currentSlideId]: {
            id: state.currentSlideId,
            video_id: 0,
            start: state.currentSlideId,
            title: "",
            sections: []
          }
        }
      },
      slideId: slideId + 1
    })

    case types.NEW_SECTION: 
      const {slides, sections} = state.entities
      const {e,slideId} = action
      const currentSection = state.sectionId
      this.setState({
        sectionId: sectionId + 1,
        entities: {
          ...this.state.entities,
          slides: {
            ...slides,
            [slideId]: {
              ...slides[slideId], 
              sections: [...slides[slideId].sections,
                         currentSectionId]
            }
          },
          sections: {
            ...sections,
            [currentSectionId]: {
              id: currentSectionId
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

    default:
      return state;
  }
}

export default newVideoReducer
