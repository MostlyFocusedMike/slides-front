// Action Creators
import * as types from './types'
import {videoAdapter, userAdapter} from '../adapters'

export const addTest = (num) => {
  return {type: types.ADD_TEST, num: num}
}

export const loadVideo = (videoId) => {
  // CHANGE HERE BETWEEN NORMALIZED OR NOT DATA
  return dispatch => {
    videoAdapter.getOneNormalized(videoId)
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

export const createUser = (user) => {
  return dispatch => {
    userAdapter.create(user).then(response =>{
      if (response.id) {
        dispatch({type: types.CREATE_USER, currentUser: response })
      }
    })
  }
}
