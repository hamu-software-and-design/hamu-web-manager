import {expect} from 'chai'
import User from '../User.js'
import {each} from 'async'

describe('UserModel', function() {
  it('test required values', function(done) {
    const newUser = new User()
    newUser.validate((err) => {
      expect(err.errors.username).to.exist
      expect(err.errors.password).to.exist
      expect(err.errors.email).to.not.exist
      done()
    })
  })
  it('test default values', function(done) {
    const newUser = new User()
    expect(newUser._created).to.exist
    done()
  })
  it('test validations for values', function(done) {
    const newUser = new User({
      email: 'edm.com',
    })
    const newUser2 = new User({
      email: 'him@her.com',
      thumbnail: 'WWW.her.com'
    })
    const err = newUser.validateSync()
    const err2 = newUser2.validateSync()
    expect(err.errors.email).to.exist
    expect(err2.errors.email).to.not.exist
    expect(err2.errors.thumbnail).to.not.exist
    done()
  })
})
