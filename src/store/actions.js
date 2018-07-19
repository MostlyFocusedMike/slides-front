// Action Creators
import * as types from './types'
import {videoAdapter, userAdapter} from '../adapters'

export const addTest = (num) => {
  return {type: types.ADD_TEST, num: num}
}

export const loadVideo = (videoId) => {
  // this is possible becuase of thunk
  return dispatch => {
    videoAdapter.getOne(videoId)
      .then(video =>{
      dispatch({type: types.LOAD_VIDEO, video: video})
    })
  }
}

export const loadUser = (userId) => {
  return dispatch => {
    userAdapter.getOne(userId).then(user =>{
      dispatch({type: types.LOAD_USER, user: user})
    })
  }
}

export const deserializeVideo = (video) => {
    return {
      type: types.DESERIALIZE_VIDEO,
      video: video    
    }
  }
