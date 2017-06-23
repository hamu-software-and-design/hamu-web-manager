import {simulateServerResponse} from '../server.js'

describe('simulateServerResponse', function() {
  const test_1 = 'hello'
  const test_2 = ['john', 'mary']
  const test_3 = { name: 'john', age: 21 }
  it('simulating server success 1', function() {
    expect.assertions(1)
    return simulateServerResponse(test_1).then(data => expect(data).toEqual(test_1))
  })
  it('simulating server success 2', function() {
    expect.assertions(1)
    return simulateServerResponse(test_2, true).then(data => expect(data).toEqual(test_2))
  })
  it('simulating server success 3', function() {
    expect.assertions(1)
    return simulateServerResponse(test_3).then(data => expect(data).toEqual(test_3))
  })

  it('simulating server error', function() {
    expect.assertions(1)
    return simulateServerResponse(test_3, false).catch(e => expect(e).toEqual(new Error("Server Error")))
  })
})
