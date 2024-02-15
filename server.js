const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Text Analyzer listening on port ${port}`)
})