import {expect} from 'chai'
import User from '../User.js'

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
    newUser.validate((err) => {
      expect(err.errors.email).to.exist
      newUser2.validate((err2) => {
        expect(err2.errors.email).to.not.exist
        expect(err2.errors.thumbnail).to.not.exist
        done()
      })
    })
  })
})
