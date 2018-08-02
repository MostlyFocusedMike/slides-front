// Action Creators
import * as types from './newVideoTypes'
import {videoAdapter} from '../../adapters';

export const handleLoadPreview = (e) => {
  return {type: types.HANDLE_LOAD_PREVIEW, e: e} 
}

export const handleVideoChange  = (e) => {
  return {type: types.HANDLE_VIDEO_CHANGE, e: e} 
}

export const handleSlideChange  = (key, value, id) => {
  return {type: types.HANDLE_SLIDE_CHANGE, key, value, id} 
}

export const handleSectionChange  = (e, id) => {
  return {type: types.HANDLE_SECTION_CHANGE, e: e, id: id} 
}

export const handleOrderChange  = (sectionId, finalPlace) => {
  return {type: types.HANDLE_ORDER_CHANGE, id: sectionId, finalPlace} 
}

export const handleFormSubmit  = (e, entities) => {
  return dispatch => {
    videoAdapter.create(entities)
      .then(videoId => {
        dispatch({
          type: types.HANDLE_FORM_SUBMIT, 
          fireRedirect: videoId.id
        })
      })
  }
}

export const setVideoUser = (user) => {
  return ({type: types.SET_VIDEO_USER, user: user})
}

export const newSlide  = (start, timecode) => {
  return {type: types.NEW_SLIDE, start, timecode} 
}

export const handleSlideStartChange  = (id, start) => {
  return {type: types.HANDLE_SLIDE_START_CHANGE, id, start}
}

export const newSection  = (slideId) => {
  return {type: types.NEW_SECTION, slideId: slideId} 
}

export const deleteSection  = (slideId, sectionId) => {
  return {type: types.DELETE_SECTION, slideId, sectionId} 
}

export const deleteSlide  = (slideId) => {
  console.log("Action delete");
  return {type: types.DELETE_SLIDE, slideId} 
}

export const resetNewVideo  = () => {
  return {type: types.RESET_NEW_VIDEO}
}
