import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'

/**
 * Wrapper for the redux store
 */
export default class Store {
  constructor(history) {
    const middleware = routerMiddleware(history)
    this.store = createStore(
      combineReducers({
        router: routerReducer
      }),
      applyMiddleware(middleware)
    )
  }
}
