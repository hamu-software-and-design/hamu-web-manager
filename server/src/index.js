import Express from 'express'

const app = new Express()

app.listen(3000, function() {
  console.log('server is listening on port 3000')
})
