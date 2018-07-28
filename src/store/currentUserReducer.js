import * as types from "./types"

const initState = {
  currentUser: {}
}

function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return ({
        id: action.currentUser.id,
        username: action.currentUser.username
      })
    default:
      return state;
  }
}

export default currentUserReducer
