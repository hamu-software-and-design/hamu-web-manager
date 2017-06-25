import User from '../models/User.js'

export default class UserController {
  static postUser(req,res) {
    const newUser = new User(req.body)
    newUser.save((err) => {
      if(err) { res.sendStatus(400) }
      else { res.send(newUser) }
    })
  }
}
