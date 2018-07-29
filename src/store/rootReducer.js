import { combineReducers } from 'redux';
import videoInfoReducer from './videoInfoReducer'
import currentUserReducer from './currentUserReducer'

const rootReducer = combineReducers({
  videoInfo: videoInfoReducer,
  currentUser: currentUserReducer
});

export default rootReducer


