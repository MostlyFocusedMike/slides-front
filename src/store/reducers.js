import * as types from "./types"

const initState = {
  test: 0
}
export default function videoReducer( state = initState, action) {
  switch (action.type) {
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
