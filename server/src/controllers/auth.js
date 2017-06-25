import User from '../models/User.js'

import Jwt from 'jsonwebtoken'
import ExpressJwt from 'express-jwt'

import Credentials from '../credentials.js'

export function login(req,res) {
  const {username, password} = req.body
  User.findOne({ username: username })
    .select({ username: true, password: true })
    .exec((e, user) => {
      if(e) { return res.sendStatus(500) }
      if(!user) { return res.sendStatus(401) }
      user.verifyPassword(password, (err, isMatch) => {
        if(err) { return res.sendStatus(500) }
        if(!isMatch) { return res.sendStatus(401) }
        const lastLogin = new Date().getTime()
        user._lastLogin = lastLogin
        user.save((err) => {
          if(err) { return res.sendStatus(500) }
          const access = Jwt.sign({ id: user.id, _lastLogin: lastLogin }, Credentials.secret, {expiresIn: '10 minutes'})
          res.send({ token: access })
        })
      })
    })
}

export function authenticate(req,res,next) {
  ExpressJwt({ secret: Credentials.secret })(req,res, function() {
    if(!req.user) { return res.sendStatus(401) }
    User.findById(req.user.id).exec((err, user) => {
      if(err) { return res.sendStatus(500) }
      if(user._lastLogin !== req.user._lastLogin) { return res.sendStatus(401) }
      next()
    })
  })
}
