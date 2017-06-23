import en from '../data/en.json'
import vi from '../data/vi.json'

import {getObjectScaffold} from '../../util/manipulation.js'

describe('localization data', function() {
  test('sanitize data', function() {
    expect(getObjectScaffold(en)).toEqual(getObjectScaffold(vi))
  })
})
