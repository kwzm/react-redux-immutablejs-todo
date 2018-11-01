import { createStore } from 'redux'
// import { combineReducers } from 'redux-immutable'
// import { Map } from 'immutable'
import reducer from './reducer'

// If you have more reducers you will need this.
// const rootReducer = combineReducers({
//   App: reducer,
// })

// const initialState = Map()

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store