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

export const deserializeVideo = (video) => {
  return {
    type: types.DESERIALIZE_VIDEO,
    video: video    
  }
}

function setCurrentUserHelper(response, dispatch) {
  if (response.user.id) {
    if (response.token) {
      localStorage.token = response.token
    }
    dispatch({type: types.SET_CURRENT_USER, currentUser: response.user })
  }
}

export const createUser = (user) => {
  return dispatch => {
    userAdapter.create(user).then(response =>{
      setCurrentUserHelper(response, dispatch) 
    })
  }
}

export const reauthUser = (token) => {
  return (dispatch) => {
    userAdapter.reauth(token).then(response =>{
      setCurrentUserHelper(response, dispatch) 
    })
  }
}
export const logIn = (user) => {
  console.log("Log in action");
  return (dispatch) => {
    userAdapter.logIn(user).then(response => {
      setCurrentUserHelper(response, dispatch) 
  })
}
export const logOut = () => {
  localStorage.token = ""
  return ({
    type: types.SET_CURRENT_USER,
    currentUser: {}
  })
}
