import {LOGIN_REQUEST, LOGIN_RESPONSE } from '../actions/auth.js'

export default function app(state = {
  isFetching: false
}, action) {
  return {
    isFetching: isFetching(state.isFetching, action),
    isAuthenticated: isAuthenticated(state.isAuthenticated, action),
    token: token(state.token, action),
    status: status(state.state, action),
    attempts: attempts(state.attempts, action)
  }
}

function isFetching(state = false, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return true
    case LOGIN_RESPONSE:
      return false
    default:
      return state
  }
}

function isAuthenticated(state = (localStorage.getItem('token') ? true : false), action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return false
    case LOGIN_RESPONSE:
      return action.isAuthenticated
    default:
      return state
  }
}

function status(state = null, action) {
  switch(action.type) {
    case LOGIN_RESPONSE:
      return action.status || null
    default:
      return state
  }
}

function token(state = (localStorage.getItem('token') || null), action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return null
    case LOGIN_RESPONSE:
      return action.token || null
    default:
      return state
  }
}

function attempts(state = 0, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return state + 1
    default:
      return state
  }
}
