import {getClientLang} from '../util.js'

describe('getClientLang', function() {
  test('should function correctly with language', function() {
    const test_1 = {
      language: 'en'
    }
    const test_2 = {
      language: 'en-us'
    }
    global.navigator = test_1
    expect(getClientLang()).toBe('en')
    global.navigator = test_2
    expect(getClientLang()).toBe('en')
  })
  test('should function correctly with userLanguage', function() {
    const test_1 = {
      userLanguage: 'en'
    }
    const test_2 = {
      userLanguage: 'en-us'
    }
    global.navigator = test_1
    expect(getClientLang()).toBe('en')
    global.navigator = test_2
    expect(getClientLang()).toBe('en')
  })
  test('should function correctly with neither', function() {
    global.navigator = {}
    expect(getClientLang()).toBe('en')
  })
})
