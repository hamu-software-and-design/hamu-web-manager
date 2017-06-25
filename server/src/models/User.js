import Mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = Mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  thumbnail: { type: String },
  _lastLogin: Number,
  _perm: { type: Number, default: 1, index: true },
  _created: { type: Date, default: Date.now(), index: true }
})

//validations
UserSchema.path('email').validate((email) => {
  const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  return emailRegex.test(email)
})
UserSchema.path('thumbnail').validate((thumbnail) => {
  const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/gi
  return urlRegex.test(thumbnail)
})

//hooks
UserSchema.pre('save', function(cb) {
  if(!this.isModified('password')) { return cb() }
  bcrypt.hash(this.password, 10, (e, hash) => {
    if(e) { cb(e) }
    this.password = hash
    cb()
  })
})

//methods
UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if(err) { cb(err) }
    cb(null, isMatch)
  })
}

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { delete ret._id }
});

export default Mongoose.model('User', UserSchema)
