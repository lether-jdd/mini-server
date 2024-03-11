const express = require('express')
const queryDb  = require('./sql')

const app = express()

const port = 3000

app.get('/', queryDb)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

