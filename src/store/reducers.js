import * as types from "./types"
const initState = {
  test: 0,
  currentUser: {},
  videoInfo: {},
  videoPlayer: {} 
}
export default function videoReducer( state = initState, action) {
  switch (action.type) {
    case types.LOAD_VIDEO:
      return {
        ...state,
        videoInfo: action.video 
      }   
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }   
    case types.ADD_TEST:
      return {
        ...state,
        test: state.test + action.num
        // remember we don't need prevState since we are 
        // literally passing the state in as an object
      }
    default:
      return state;
  }
}
