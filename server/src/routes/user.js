import Express from 'express'
import Controller from '../controllers/user.js'
import Auth from '../controllers/auth.js'

const Router = Express.Router()

Router.post('/', Controller.postUser)

export default Router
