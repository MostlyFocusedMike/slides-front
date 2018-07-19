// Action Creators
import * as types from './types'
import {videoAdapter} from '../adapters'

export const addTest = (num) => {
  return {type: types.ADD_TEST, num: num}
}

export const loadVideo = (video) => {
  return dispatch => {
    videoAdapter.getOne(11).then(video =>{
      dispatch({type: types.LOAD_VIDEO, video: video})
    })
  }
}
// export function fetchHobsWithJobs() {
//   //using thunk, we return are returning a function here instead of
//   //a plain object.  Thunk intercepts this returned value, and if it is a
//   //function, cancels the normal event of calling our reducers, and
//   //instead, passes in 'dispatch' as an argument to the function.
//   //the fetch request was extracted out to our adapter, but still functions the same
//   return dispatch => {
//     dispatch({ type: "HOBBITS_LOADING" });
//     RestfulAdapter.indexFetch("hobbits").then(data => {
//       dispatch({ type: "HOBBIT_LOAD", payload: data });
//     });
//   };
// }

