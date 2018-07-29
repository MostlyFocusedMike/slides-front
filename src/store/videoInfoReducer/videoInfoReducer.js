import * as types from "./videoInfoTypes"

const initState = {
}
function videoInfoReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_VIDEO:
      return {
        entities: action.video.entities
      }   
    case types.CLEAR_VIDEO:
      return {}
    default:
      return state;
  }
}

export default videoInfoReducer

