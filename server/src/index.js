import Express from 'express'
import path from 'path'
import Mongoose from 'mongoose'

import credentials from './credentials.js'

const app = new Express()
Mongoose.connect(credentials.mongodb.url)

app.use(Express.static(path.resolve(__dirname + '/../../client/build')))

app.get('*', function(req,res) {
  res.sendFile(path.resolve(__dirname, '/../../client/build', 'index.html'))
})

app.listen(3000, function() {
  console.log('server is listening on port 3000')
})
