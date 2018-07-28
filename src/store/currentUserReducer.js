import * as types from "./types"
const initState = {
  currentUser: {},
}

function currentUserReducer(state = initState, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }   
    default:
      return state;
  }
}

export default currentUserReducer
