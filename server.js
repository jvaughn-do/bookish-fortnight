const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 8000

app.use(bodyParser.json())

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, '/test.js'));
  })

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, '/test.html'));
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})