import * as types from "./types"

const initState = {
  test: 0,
  video: {
    id: "",
    desc: "Loading",
    youtubeVid: "",
    user: {
      username: "Loading",
      id: ""
    },
    topics: {
      selected: [],
      others: []
    },
    slides: [
      {id: "",
      videoId: "",
      start: 0,
      title: "Loading",
      sections: []
      }
    ]
  }
}
export default function videoReducer( state = initState, action) {
  switch (action.type) {
    case types.LOAD_VIDEO:
      return {
        ...state,
        video: action.video 
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
