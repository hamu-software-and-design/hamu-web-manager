import Express from 'express'
import * as Controller from '../controllers/auth.js'

import Credentials from '../credentials.js'


const Router = Express.Router()

Router.route('/login').post(Controller.login)
Router.route('/protected').get(Controller.authenticate, (req,res) => {

  res.send()
})
Router.route('/logout').post()

export default Router
