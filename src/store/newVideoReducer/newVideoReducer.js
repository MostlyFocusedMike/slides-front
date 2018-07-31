import * as types from './newVideoTypes'
const initState = {
  fireRedirect: false,
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
        user: {},
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
function newVideoReducer(state = initState, action) {
  const {slides, sections} = state.entities
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
            0: {
              ...state.entities.videos[0],
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
            0: {
              ...state.entities.videos[0],
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
            [action.e.target.dataset.key]: action.e.target.value
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
    let currentPlace = sections[action.id].order
    let newPlace = action.e.target.value 
    let minPlace = Math.min(newPlace, currentPlace)
    let maxPlace = Math.max(newPlace, currentPlace)
    console.log("this is the new order:", newPlace);
    console.log("this is the current order:", currentPlace);
    console.log("This is the high", maxPlace);
    console.log("This is the low", minPlace);
    Object.values(sections).map(section => {
      let mover = newPlace < currentPlace ? 1 : -1
      if (section.id === action.id) {
        console.log("this is the affected section, it's order is now", newPlace)
      } else if (minPlace <= section.order && section.order <= maxPlace) {
        console.log("this id would need to", mover, section.order)
      } else {
        console.log("this order is fine:", section.order);
      }
    })
    return ({
      ...state,
      entities: {
        ...state.entities,
        sections: {
          ...state.entities.sections,
          [action.id]: {
            ...state.entities.sections[action.id],
            [action.e.target.dataset.key]: newPlace
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
          0: {
            ...state.entities.videos[0],
            slides: [...state.entities.videos[0].slides,
                    currentSlideId]
          }
        },
        slides: {
          ...state.entities.slides,
          [currentSlideId]: {
            id: currentSlideId,
            video_id: 0,
            start: currentSlideId,
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

    default:
      return state;
  }
}

export default newVideoReducer
