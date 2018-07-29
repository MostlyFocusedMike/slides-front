import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './rootReducer'


function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
  );
}

const store = configureStore()
export default store

// this lets you import action creators from 
// './example' and not './example/actions
export {logIn, logOut, createUser, reauthUser} from "./currentUserReducer"
export {loadVideo, clearVideo} from "./videoInfoReducer"



