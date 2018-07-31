// Action Creators
import * as types from './newVideoTypes'
import {videoAdapter} from '../../adapters';

export const handleLoadPreview = (e) => {
  return {type: types.HANDLE_LOAD_PREVIEW, e: e} 
}

export const handleVideoChange  = (e) => {
  return {type: types.HANDLE_VIDEO_CHANGE, e: e} 
}

export const handleSlideChange  = (e, id) => {
  return {type: types.HANDLE_SLIDE_CHANGE, e: e, id: id} 
}

export const handleSectionChange  = (e, id) => {
  return {type: types.HANDLE_SECTION_CHANGE, e: e, id: id} 
}

export const handleOrderChange  = (e, sectionId) => {
  return {type: types.HANDLE_ORDER_CHANGE, e, id:sectionId} 
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

export const newSlide  = () => {
  return {type: types.NEW_SLIDE} 
}

export const newSection  = (slideId) => {
  return {type: types.NEW_SECTION, slideId: slideId} 
}
