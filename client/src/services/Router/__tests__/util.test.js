import {parseQuery} from '../util.js'

describe('parseQuery', function() {
  test('should only accept strings', function() {
    expect(() => parseQuery(1)).toThrow()
    expect(() => parseQuery(["hello"])).toThrow()
    expect(() => parseQuery({ hello: "hello"})).toThrow()
  })
  test('should parse correctly', function() {
    const test_1 = '?lang=en'
    const answer_1 = { lang: 'en' }
    expect(parseQuery(test_1)).toEqual(answer_1)
    const test_2 = '?lang=en&location=us'
    const answer_2 = { lang: 'en', location: 'us' }
    expect(parseQuery(test_2)).toEqual(answer_2)
  })
})
