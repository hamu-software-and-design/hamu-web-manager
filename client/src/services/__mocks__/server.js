import database from './database.json'

/**
 * Simulates a server response
 * @param {json} data The data to wrap.
 * @param {boolean} fulfilled Whether the simulated event should succeed
 * @return {Promise} JS Promise wrapping the event
 */
export function simulateServerResponse(data, fulfilled = true, e = new Error("Server Error")) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(fulfilled) { resolve(data) }
      else { reject(e) }
    }, 3000)
  })
}

export function fetch(path, body = {}, success = true) {
  switch(path) {
    case '/login':
      const correct_credentials = (body.username == database.auth.username && body.password == database.auth.password)
      return simulateServerResponse(database.auth.token, correct_credentials, new Error(401))
  }
}
