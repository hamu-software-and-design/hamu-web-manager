import {flattenObject, getObjectScaffold} from '../manipulation.js'

describe('flattenJSON', function() {
  test('should throw error if object is not supplied', function() {
    expect(() => flattenObject(1)).toThrow()
    expect(() => flattenObject("hi")).toThrow()
    expect(() => flattenObject([1,2,3])).toThrow()
  })
  test('should expect correct answers', function() {
    const test_1 = {
      name: "Jimmy Hendrix"
    }
    const test_2 = {
      name: {
        last: "Hendrix",
        first: "Jimmy"
      }
    }
    const answer_2 = {
      "name.last": "Hendrix",
      "name.first": "Jimmy"
    }
    const test_3 = {
      profile: {
        name: {
          first: "Jimmy",
          last: "Hendrix"
        },
        age: 100
      }
    }
    const answer_3 = {
      "profile.name.first": "Jimmy",
      "profile.name.last": "Hendrix",
      "profile.age": 100
    }
    expect(flattenObject(test_1)).toEqual(test_1)
    expect(flattenObject(test_2)).toEqual(answer_2)
    expect(flattenObject(test_3)).toEqual(answer_3)
  })
})

describe('getObjectScaffold', function() {
  test('should throw error if object is not supplied', function() {
    expect(() => getObjectScaffold(1)).toThrow()
    expect(() => getObjectScaffold("test")).toThrow()
    expect(() => getObjectScaffold([1,2,3])).toThrow()
  })
  test('should expect correct answers', function() {
    const test_1 = {
      name: "Jimmy Hendrix"
    }
    const answer_1 = ["name"]
    const test_2 = {
      name: {
        last: "Hendrix",
        first: "Jimmy"
      }
    }
    const answer_2 = ["name.last", "name.first"]
    const test_3 = {
      profile: {
        name: {
          first: "Jimmy",
          last: "Hendrix"
        },
        age: 100
      }
    }
    const answer_3 = ["profile.name.first","profile.name.last","profile.age"]
    expect(getObjectScaffold(test_1)).toEqual(answer_1)
    expect(getObjectScaffold(test_2)).toEqual(answer_2)
    expect(getObjectScaffold(test_3)).toEqual(answer_3)
  })
})
