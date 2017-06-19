import express from 'express'

const app = express()

app.use((req, res, next) => {
  var data = "";
  req.on('data', (chunk) => { data += chunk})
  req.on('end', () => {
    req.rawBody = data;
    next();
  })
})

app.get('/', (req, res) => {
  res.send(process.env.API_URL)
})

const server = app.listen(3001, () => {
  console.log('started')
})
