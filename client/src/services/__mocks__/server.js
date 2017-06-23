/**
 * Simulates a server response
 * @param {json} data The data to wrap.
 * @param {boolean} fulfilled Whether the simulated event should succeed
 * @return {Promise} JS Promise wrapping the event
 */
export function simulateServerResponse(data, fulfilled = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(fulfilled) { resolve(data) }
      else { reject(new Error("Server Error")) }
    }, 3000)
  })
}
