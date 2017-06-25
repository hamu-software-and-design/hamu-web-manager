import Client from '../models/Client.js'

export function postClient(req,res) {
  const client = new Client({
    name: req.body.name,
    secret: req.body.secret
  })
}
