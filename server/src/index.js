import FS from 'fs'
import Express from 'express'
import path from 'path'
import Mongoose from 'mongoose'
import BodyParser from 'body-parser'
import HTTPS from 'https'

import credentials from './credentials.js'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

const app = new Express()
Mongoose.connect(credentials.mongodb.url)

app.use(Express.static(path.resolve(__dirname + '/../../client/build')))
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.use('/user', userRouter)
app.use('/auth', authRouter)

app.get('*', function(req,res) {
  res.sendFile(path.resolve(__dirname, '/../../client/build', 'index.html'))
})

HTTPS.createServer({
  key: FS.readFileSync('./key.pem'),
  cert: FS.readFileSync('./cert.pem'),
  passphrase: credentials.passphrase
}, app).listen(3000, "localhost", function() {
  console.log("Server has started on port 3000")
})
