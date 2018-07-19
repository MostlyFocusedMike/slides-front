import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux";
import videoReducer from './reducers'


const store = createStore(videoReducer, applyMiddleware(thunk));

export default store

// this lets you import action creators from 
// './store' and not './store/actions
export {addTest, loadVideo} from "./actions"



