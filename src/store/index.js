import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux";
import videoReducer from './reducers'


function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(videoReducer, composeEnhancers(applyMiddleware(thunk))
  );
}

const store = configureStore()
export default store

// this lets you import action creators from 
// './store' and not './store/actions
export * from "./actions"



