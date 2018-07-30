
import * as types from `./newVideoTypes'
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

export const handleFormSubmit  = (e) => {
  return {type: types.HANDLE_FORM_SUBMIT, e: e} 
}

export const handleFieldSubmit  = (e) => {
  return {type: types.HANDLE_FIELD_SUBMIT, e: e} 
}

export const newSlide  = (e) => {
  return {type: types.NEW_SLIDE, e: e} 
}
export const newSection  = (e, slideId) => {
  return {type: types.NEW_SLIDE, e: e, slideId: slideId} 
}
