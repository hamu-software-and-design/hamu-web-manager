import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { routerMiddleware, routerReducer, replace } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import localeReducer from './reducers/locale.js'
import authReducer from './reducers/auth.js'

/**
 * Wrapper for the redux store
 */
export default class Store {
  constructor(history) {
    const middleware = routerMiddleware(history)
    this.store = createStore(
      combineReducers({
        router: routerReducer,
        auth: authReducer,
        locale: localeReducer
      }),
      applyMiddleware(middleware, thunkMiddleware, logger)
    )
  }
}
