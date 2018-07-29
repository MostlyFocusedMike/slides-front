// Action Creators
import * as types from './videoInfoTypes'
import {videoAdapter} from '../../adapters'

export const loadVideo = (videoId) => {
  // CHANGE HERE BETWEEN NORMALIZED OR NOT DATA
  return dispatch => {
    videoAdapter.getOneNormalized(videoId)
      .then(video =>{
      dispatch({type: types.LOAD_VIDEO, video: video})
    })
  }
}

export const clearVideo = () => {
  return {
    type: types.CLEAR_VIDEO
  }
}
