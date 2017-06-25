import Mongoose from 'mongoose'

const ClientSchema = Mongoose.Schema({
  name: { type: String, unique: true, required: true, index: true },
  secret: { type: String, required: true }
})

ClientSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { delete ret._id }
});

export default Mongoose.model('Client', ClientSchema)
