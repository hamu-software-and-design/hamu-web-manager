import fetch from 'isomorphic-fetch'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccess(token) {
  return {
    type: LOGIN_RESPONSE,
    isAuthenticated: true,
    token
  }
}

function loginError(status) {
  return {
    type: LOGIN_RESPONSE,
    isAuthenticated: false,
    status
  }
}

function handleResponse(res) {
  if(res.status >= 200 && res.status < 300) {
    return res.json()
  }
  const error = new Error('Response error')
  error.status = res.status
  throw error
}

export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }
  return function(dispatch) {
    dispatch(requestLogin())
    return fetch('https://localhost:3000/auth/login', config)
      .then(res => handleResponse(res)).then(data => {
        localStorage.setItem('token', data)
        dispatch(loginSuccess(data))
      })
      .catch(err => {
        dispatch(loginError(err.status))
      }
      )
  }
}
