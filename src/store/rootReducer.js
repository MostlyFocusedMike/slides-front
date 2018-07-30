import { combineReducers } from 'redux';
import videoInfoReducer from './videoInfoReducer'
import currentUserReducer from './currentUserReducer'
import newVideoReducer from './newVideoReducer'

const rootReducer = combineReducers({
  videoInfo: videoInfoReducer,
  currentUser: currentUserReducer,
  newVideo: newVideoReducer
});

export default rootReducer


