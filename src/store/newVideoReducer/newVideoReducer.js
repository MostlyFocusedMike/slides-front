import * as types from './newVideoTypes'
const initState = {
  fireRedirect: false,
  loadPreview: false,
  slideId: 1,
  sectionId: 1, //video id will always be 0 for these forms, but slides and sections need to increment
  entities: {
    videos: {
      10: { 
        id: 0,
        desc: "",
        youtube_vid: "",
        topics: {selected: [], others: []},
        user: {},
        slides: [0] 
      }
    },
    slides: {
      0: {
        id: 0,
        video_id: 0,
        timecode: "0:00",
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

function newVideoReducer(state = initState, action) {
  const {slides, sections} = state.entities
  let videoId = Object.keys(state.entities.videos)[0]
  debugger
  // this would be the way to set the highest key for new slides and sections
  // Math.max(...Object.keys(state.entities.slides)) + 1 

  switch(action.type) {
    case types.HANDLE_LOAD_PREVIEW: 
      action.e.preventDefault() 
      return ({loadPreview: true})

    case types.SET_VIDEO_USER:
      return ({
        ...state,
        entities: {
          ...state.entities,
          videos: {
            [videoId]: {
              ...state.entities.videos[videoId],
              user: action.user
            }
          }
        }
      })

    case types.HANDLE_VIDEO_CHANGE:
      let loadPreview = (action.e.target.name === "youtube_vid") ?
        action.e.target.value.length >= 11 : state.loadPreview
      return ({
        ...state,
        loadPreview,
        entities: {
          ...state.entities,
          videos: {
            ...state.entities.videos,
            [videoId]: {
              ...state.entities.videos[videoId],
              [action.e.target.name]: action.e.target.value
            }
          }
        }
      })

  case types.HANDLE_SLIDE_CHANGE: 
    return ({
      ...state,
      entities: {
        ...state.entities,
        slides: {
          ...state.entities.slides,
          [action.id]: {
            ...state.entities.slides[action.id],
            [action.key]: action.value
          }
        }
      }
    })

  case types.HANDLE_SECTION_CHANGE:
    let value = action.e.target.type === 'checkbox' ? 
      action.e.target.checked : action.e.target.value;
    return ({
      ...state,
      entities: {
        ...state.entities,
        sections: {
          ...state.entities.sections,
          [action.id]: {
            ...state.entities.sections[action.id],
            [action.e.target.dataset.key]: value
          }
        }
      }
    })

  case types.HANDLE_ORDER_CHANGE:
    return ({
      ...state,
      entities: {
        ...state.entities,
        sections: {
          ...state.entities.sections,
          [action.id]: {
            ...state.entities.sections[action.id],
            order: action.finalPlace
          }
        }
      }
    })

  case types.HANDLE_SLIDE_START_CHANGE:
    return ({
      ...state,
      entities: {
        ...state.entities,
        slides: {
          ...state.entities.slides,
          [action.id]: {
            ...state.entities.slides[action.id],
            start: action.start,
          }
        }
      }
    })
  case types.HANDLE_FORM_SUBMIT:
    return ({
      ...state,
      fireRedirect: action.fireRedirect
    })

  case types.NEW_SLIDE:
    let currentSlideId = parseInt(state.slideId, 10)
    return ({
      ...state,
      entities: {
        ...state.entities,
        videos: {
          [videoId]: {
            ...state.entities.videos[videoId],
            slides: [...state.entities.videos[videoId].slides,
                    currentSlideId]
          }
        },
        slides: {
          ...state.entities.slides,
          [currentSlideId]: {
            id: currentSlideId,
            video_id: videoId,
            start: action.start,
            timecode: action.timecode,
            title: "",
            sections: []
          }
        }
      },
      slideId: state.slideId + 1
    })

    case types.NEW_SECTION: 
      const {slideId} = action
      const currentSectionId = state.sectionId
      return ({
        ...state,
        sectionId: state.sectionId + 1,
        entities: {
          ...state.entities,
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
              id: currentSectionId,
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
    case types.DELETE_SECTION:
      let sectionsCopy = {...state.entities.sections}
      let sectionIdsCopy = [...state.entities.slides[action.slideId].sections]
      let idxOfRemoved = sectionIdsCopy.indexOf(parseInt(action.sectionId))
      delete sectionsCopy[action.sectionId]
      sectionIdsCopy.splice(idxOfRemoved, 1)
      return ({
        ...state,
        entities: {
          ...state.entities,
          slides: {
            ...slides,
            [action.slideId]: {
              ...slides[action.slideId], 
              sections: sectionIdsCopy
            }
          },
          sections: sectionsCopy
        }
      })
    case types.DELETE_SLIDE:
      let slidesCopy = {...state.entities.slides}
      let videoCopy = {...state.entities.videos[videoId]}
      let idxOfSlide = videoCopy.slides.indexOf(action.slideId)
      delete slidesCopy[action.slideId]
      videoCopy.slides.splice(idxOfSlide, 1)
      return ({
        ...state,
        entities: {
          ...state.entities,
          slides: slidesCopy,
          videos: {
            [videoId]: videoCopy
          }
        }
      })

    case types.RESET_NEW_VIDEO: 
      return initState

    default:
      return state;
  }
}

export default newVideoReducer
